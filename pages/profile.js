import { useRouter } from "next/router"

const profile = () => {
    const router = useRouter();
    const handleSignOut = () => {
        router.push("/login");
    }
    return (
        <>
          <h1>Login Sucessfully!!!!!!</h1>
          <button onClick={handleSignOut}>SignOut</button>  
        </>
    )
}

export default profile
