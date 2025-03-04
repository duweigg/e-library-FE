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
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "60%",
        width: 500,
        border: "solid 1px light-grey",
        backgroundColor: "rgba(0,0,0,0.4)",
        color: "white"
      }}>
        <div style={{ fontSize: 40, fontWeight: "700", marginTop: "20%", marginBottom: "5%" }}>Sign In</div>
        <div style={{ width: "50%" }}>
          <div style={{ fontSize: 20 }}>Username</div>
          <input
            style={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", padding: 5, paddingLeft: 10, borderRadius: 10 }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          ></input>
        </div>
        <div style={{ height: 30 }}></div>
        <div style={{ width: "50%" }}>
          <div style={{ fontSize: 20 }}>Password</div>
          <input
            type="password"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", padding: 5, paddingLeft: 10, borderRadius: 10 }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
        </div>
        <button
          style={{ marginTop: 80, marginBottom: 10, border: "solid 2px white", padding: "5px 10px 5px 10px", borderRadius: 20 }}
          onClick={async () => {
            let isSignIn = await Signin(username, password)
            if (isSignIn) {
              router.push("/dashboard")
            }
          }}>Sign In</button>
        <div style={{ fontSize: 13, color: "grey" }}>Do not have account yet? <span style={{ color: "white" }} onClick={() => { router.push("/signup") }}>Sign Up</span></div>

      </div>
    </div >
  );
}
