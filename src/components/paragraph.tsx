export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ className = "", children }: ParagraphProps) => {
  return <p className={`  ${className}`}>{children}</p>;
};
export default Paragraph;
