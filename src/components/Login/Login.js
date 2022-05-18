import React from 'react';
import { Button, Card } from 'react-bootstrap';
import googleImg from '../../Img/google_img.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Google from '../../Img/google.png';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../LoadingSpinner/Loading';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if(loading){
        return <Loading></Loading>
    }

    if (user){
        navigate('/todo');
    }

    let errorText;
    if (error) {
        errorText = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    return (
        <Card className='mx-auto mt-3' style={{ width: '24rem' }}>
            <Card.Img variant="top" src={googleImg} />
            <Card.Body className='mx-auto'>
                <Card.Title className='text-center'>Login with Google</Card.Title>
                {errorText}
                <Button onClick={() => signInWithGoogle()} className='mt-2' variant="dark">Google Login <img src={Google} width={30} height={30} alt="" /></Button>
            </Card.Body>
        </Card>
    );
};

export default Login;