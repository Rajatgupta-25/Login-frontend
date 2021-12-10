import {useRouter} from 'next/router';

const employee = () => {
    const router = useRouter();
    const handleSignOut = () => {
        router.push("/login");
    }
    return (
        <>
          <h1>Welcome, you are an Employee.</h1>
          <button onClick={handleSignOut}>SignOut</button>  
        </>
    )
}

export default employee
