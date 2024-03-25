import { AppwriteContext } from "@/contexts/appwrite";
import React from "react";

export const useAppwriteContext = () => {
  const appwriteContext = React.useContext(AppwriteContext);
  if (appwriteContext === undefined) {
    throw new Error('useAppwriteContext must be inside a AppwriteProvider');
  }
  return appwriteContext;
};