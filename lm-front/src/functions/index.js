import { useState } from "react";

export const authorization = (history) => {
  const token = window.localStorage.getItem("token");
  if (token === null) {
    history.push("/");
  }
};
