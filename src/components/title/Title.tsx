export const Title = ({ title, className }: Props) => {
  return <h1 className={`text-white text-4xl font-semibold ${className}`}>{title}</h1>;
};

interface Props {
  title: string;
  className?: string;
}
