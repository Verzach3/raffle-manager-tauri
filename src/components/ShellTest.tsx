import React, { useState } from "react";
import { Child, ChildProcess, Command } from "@tauri-apps/api/shell";
import { PrimaryButton } from "@fluentui/react";
function ShellTest() {
  
  async function execute() {
    const sidecar = Command.sidecar('raffle-editor')
    const output = await sidecar.execute()
    console.log(await output);
    
  }

  
  return <div>
    <PrimaryButton onClick={execute}>CheckShell</PrimaryButton>
  </div>;
}

export default ShellTest;
