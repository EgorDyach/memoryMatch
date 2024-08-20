import styled from 'styled-components';
import { IndentStylesProps } from '@type/common';
import { getIndentStyles } from '@lib/utils/indent';

/*
HOC может быть применен на:
- StyledComponents
  const Uppercase = styled.div`
    text-transform: uppercase;
  `;
  export default withIndentStyles(Uppercase);

- React компонент (необходимо наличие пропа className)
  const Uppercase: FC<{className?: string}> = ({className}) => {
    return <div className={className}>...</div>;
  }
  export default withIndentStyles(Uppercase);
 */

export function withIndentStyles<T>(Component: React.ComponentType<T>) {
  return styled(Component)<IndentStylesProps>`
    ${(indents: IndentStylesProps) => getIndentStyles(indents)}
  `;
}
