"use client";

import * as React from "react";

import { useAuth } from "@/features/auth/auth-context";
import { useAuthModal } from "@/features/auth/auth-modal";

/**
 * Guest-first: allow browsing, block only "interaction" actions.
 * Usage:
 * const { guard } = useAuthGuard()
 * <button onClick={() => guard({reason:"..."}, () => doThing())}>...</button>
 */
export function useAuthGuard() {
  const { state } = useAuth();
  const modal = useAuthModal();

  const guard = React.useCallback(
    (opts: { reason?: string } | undefined, onAuthed: () => void) => {
      if (state.isAuthenticated) {
        onAuthed();
        return;
      }
      modal.open(
        opts?.reason ??
          "هذه الميزة تحتاج تسجيل دخول عشان نحفظ تقدمك ونربط كل ملفاتك بحسابك.",
      );
    },
    [state.isAuthenticated, modal],
  );

  return { isAuthenticated: state.isAuthenticated, guard };
}
