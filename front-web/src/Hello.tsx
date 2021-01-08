type Props = {
  message: string;
}

export function Hello({ message }: Props) {
  return (
    <h1>Hello {message}!</h1>
  );
}

export default Hello;
