import {useRouter} from 'next/router';

const manager = () => {
    const router = useRouter();
    const handleSignOut = () => {
        router.push("/login");
    }
    return (
        <>
          <h1>Welcome, you are a Manager.</h1>
          <button onClick={handleSignOut}>SignOut</button>  
        </>
    )
}

export default manager
