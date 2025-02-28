"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ height: "80%", width: 500, border: "solid 1px light-grey", backgroundColor: "rgba(0,0,0,0.4)" }}>
        <div>Sign In</div>
        <div>Username</div>
        <input></input>
        <div>Password</div>
        <input></input>
        <div>
          <button>Sign In</button>
        </div>
        <div>Do not have account yet? <span onClick={() => { router.push("/signup") }}>Sign Up</span></div>

      </div>
    </div >
  );
}
