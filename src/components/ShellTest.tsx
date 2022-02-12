import React, { useState } from "react";
import { Child, ChildProcess, Command } from "@tauri-apps/api/shell";
import { PrimaryButton } from "@fluentui/react";
function ShellTest() {
  let child: Child | null
  let cmd = "pwsh";
  let args = "-Command";
  const [script, setScript] = useState("ls")
  
  function execute() {
    child = null;
    const command = new Command(cmd);
    command.on('close', data => {
      console.log(`command finished with code ${data.code} and signal ${data.signal}`)
      child = null
    })

    command.on('error', error => console.log(`command error: "${error}"`))

    command.stdout.on('data', line => console.log(`command stdout: "${line}"`))
    command.stderr.on('data', line => console.log(`command stderr: "${line}"`))    
    command.spawn()
      .then(c => {
        child = c
      })
  }

  function writeToStdin(){
    child?.write("ls").catch((l) => console.log(l))
  }
  return <div>
    <PrimaryButton onClick={execute}>CheckShell</PrimaryButton>
    <PrimaryButton onClick={writeToStdin}>Send LS to stdin</PrimaryButton>
  </div>;
}

export default ShellTest;
