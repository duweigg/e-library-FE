"use client"
import { Register } from "@/api/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [nickname,setNickname]=useState("")
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ height: "80%", width: 500, border: "solid 1px light-grey", backgroundColor: "rgba(0,0,0,0.4)", color:"white" }}>
        <div>Sign Up</div>
        <div>Username</div>
        <input
        style={{backgroundColor:"rgba(255,255,255,0.1)"}}
          value = {username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
        ></input>
        <div>Password</div>
        <input
        style={{backgroundColor:"rgba(255,255,255,0.1)"}}
          value = {password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}></input>
        <div>Confirm Password</div>
        <input
        style={{backgroundColor:"rgba(255,255,255,0.1)"}}
          value = {confirmPassword}
          onChange={(e)=>{
            setConfirmPassword(e.target.value)
          }}></input>
        <div>Nickname</div>
        <input
        style={{backgroundColor:"rgba(255,255,255,0.1)"}}
          value = {nickname}
          onChange={(e)=>{
            setNickname(e.target.value)
          }}></input>
        <div>
          <button onClick={()=>{
            Register(username, password, nickname)
          }}>Sign Up</button>
        </div>
        <div>Already have an account? <span onClick={() => { router.push("/login") }}>Sign In</span></div>

      </div>
    </div >
  );
}
