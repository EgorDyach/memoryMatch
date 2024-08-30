import { requestUser$ } from "@lib/api/user";
import { uiActions, uiSelectors } from "@store/ui";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TimerContextType {
  timeLeft: number;
}

export const TimerContext = createContext<TimerContextType | undefined>(
  undefined
);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(uiSelectors.getUser); // Замените на ваш селектор
  const [timeLeft, setTimeLeft] = useState<number>(
    user ? user.heartRecoveryTimeSeconds : 0
  );

  useEffect(() => {
    setTimeLeft(user ? user.heartRecoveryTimeSeconds : 0);
  }, [user]);

  useEffect(() => {
    if (timeLeft <= 0 || (user && user?.hearts >= 7)) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, user]);

  useEffect(() => {
    (async () => {
      if (timeLeft === 0) {
        const user = await requestUser$();
        dispatch(uiActions.setUser(user));
        setTimeLeft(user.heartRecoveryTimeSeconds); // Сброс таймера
      }
    })();
  }, [timeLeft, dispatch]);

  return (
    <TimerContext.Provider value={{ timeLeft }}>
      {children}
    </TimerContext.Provider>
  );
};
