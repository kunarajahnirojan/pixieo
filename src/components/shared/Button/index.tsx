import '@/styles/components.css';
export interface IButtonProps {
  name: any;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  width?: string;
  color?: string;
}

function Button(props: IButtonProps) {
  return (
    <button
      type='button'
      className={
        props.className
          ? props.className
          : 'button text-white text-sm tracking-widest font-bold uppercase'
      }
      style={{ background: props.color }}
    >
      {props.name}
    </button>
  );
}

export default Button;
