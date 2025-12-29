import './Spinner.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
