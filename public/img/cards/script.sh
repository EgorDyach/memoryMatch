
  new=0
  for item in `ls cave`
  do
    mv cave/$item cave/card$new.webp
    ((new++))
  done
