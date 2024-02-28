import { Button } from './styles';

type IconButtonProps = {
    children: JSX.Element;
    ariaLabel: string;
    onClick: () => void;
};

const IconButton = ({ children, ariaLabel, onClick }: IconButtonProps) => {
    return (
        <Button type="button" aria-label={ariaLabel} onClick={onClick}>
            {children}
        </Button>
    );
};

export default IconButton;
