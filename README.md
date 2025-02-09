# Unresponsive Node.js Server: Synchronous Long Operation

This repository demonstrates a common issue in Node.js where a long-running synchronous operation blocks the event loop, making the server unresponsive.  The `bug.js` file contains the problematic code, and `bugSolution.js` shows how to fix it using asynchronous operations.

## Problem

The server in `bug.js` performs a 5-second synchronous loop in its request handler. This blocks the event loop, preventing the server from handling other requests or even closing gracefully.  Any attempts to access the server during this time will result in timeouts or unresponsive behavior.

## Solution

The `bugSolution.js` file corrects this by replacing the synchronous loop with an asynchronous approach.  This allows the event loop to continue processing other tasks while the long operation completes in the background.