'use server';

import { NextRequest, NextResponse } from 'next/server';
import hre from 'hardhat';


// export const dynamic = 'force-dynamic';
// export const revalidate = 0; // 0 = always dynamic


export async function GET(
  request: NextRequest
): Promise<NextResponse> {

  const signers = await hre.ethers.getSigners();
  // const signer = signers[0];

  // await hre.mbDeployer.setup();
  // const numberOfOptions = 5;


  
  return NextResponse.json({ message: "OK" });
}

export async function POST(
  request: NextRequest
): Promise<NextResponse> {
  const body = await request.json();
  // Process the data...
  return NextResponse.json({ status: 'success' });
}