"use client"
import { getUserInfo, Signin } from "@/api/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ height: "80%", width: 500, border: "solid 1px light-grey", backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}>
        <div>Sign In</div>
        <div>Username</div>
        <input
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        ></input>
        <div>Password</div>
        <input
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
        <div>
          <button onClick={() => {
            Signin(username, password)
          }}>Sign In</button>
        </div>
        <div>Do not have account yet? <span onClick={() => { router.push("/signup") }}>Sign Up</span></div>

      </div>
    </div >
  );
}
