import {useNavigate} from 'react-router-dom';

// this function withNavigate is used to navigate to the next page
export function withNavigate(Component) {
    return (props) => (
     <Component {...props}  navigate={useNavigate()} />
);
}

export default withNavigate;