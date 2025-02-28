"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUp() {
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
        <div>Sign Up</div>
        <div>Username</div>
        <input></input>
        <div>Password</div>
        <input></input>
        <div>Confirm Password</div>
        <input></input>
        <div>Nickname</div>
        <input></input>
        <div>
          <button>Sign Up</button>
        </div>
        <div>Already have an account? <span onClick={() => { router.push("/login") }}>Sign In</span></div>

      </div>
    </div >
  );
}
