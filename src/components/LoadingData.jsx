import Spinner from 'react-bootstrap/Spinner';

export const LoadingData = () =>
{
    return (
        <div className='text-center mt-5'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}