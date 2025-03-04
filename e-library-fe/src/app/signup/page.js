"use client"
import { Register, Signin } from "@/api/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nickname, setNickname] = useState("")
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
        <div style={{ fontSize: 40, fontWeight: "700", marginTop: "20%", marginBottom: "5%" }}>Sign Up</div>
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
        <div style={{ height: 15 }}></div>
        <div style={{ width: "50%" }}>
          <div>Password</div>
          <input
            type="password"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", padding: 5, paddingLeft: 10, borderRadius: 10 }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
        </div>
        <div style={{ height: 15 }}></div>
        <div style={{ width: "50%" }}>
          <div>Confirm Password</div>
          <input
            type="password"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", padding: 5, paddingLeft: 10, borderRadius: 10 }}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}></input>
        </div>
        <div style={{ height: 15 }}></div>
        <div style={{ width: "50%" }}>
          <div>Nickname</div>
          <input
            style={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", padding: 5, paddingLeft: 10, borderRadius: 10 }}
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}></input>
        </div>
        <div>
          <button style={{ marginTop: 40, marginBottom: 10, border: "solid 2px white", padding: "5px 10px 5px 10px", borderRadius: 20 }}
            onClick={async () => {
              let data = await Register(username, password, nickname)
              if (data.message == "User created successfully") {
                let isSignIn = await Signin(username, password)
                if (isSignIn) {
                  router.push("/dashboard")
                }
              }
            }}>Sign Up</button>
        </div>
        <div
          style={{ fontSize: 13, color: "grey" }}>
          Already have an account?
          <span
            style={{ color: "white" }}
            onClick={() => { router.push("/signin") }}>
            Sign In
          </span>
        </div>

      </div>
    </div >
  );
}
