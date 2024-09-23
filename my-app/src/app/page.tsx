"use client";

import Image from "next/image";

import HomePage from "./components/HomePage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ReactQueryDevtools } from 'react-query/devtools'



import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  phantomWallet,
  walletConnect,
  ChainId
} from "@thirdweb-dev/react";

const activeChain = "ethereum"; // Change to the desired blockchain

// Define the chains you want to support

// Create a new QueryClient instance

export default function Home() {
  return (

        <HomePage />




   
  );
}
