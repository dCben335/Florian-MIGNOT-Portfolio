"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const useIsClient = () => {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useIsClient;
