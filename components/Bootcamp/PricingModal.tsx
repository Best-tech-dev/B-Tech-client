"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import { Info } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base sm:text-lg font-semibold">
            <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
            Pilot Program Pricing Notice
          </DialogTitle>
          <div className="text-left">
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              <p
                className="text-gray-700"
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  lineHeight: "1.5",
                }}
              >
                The prices listed on this page are our{" "}
                <strong>standard rates</strong> for upcoming cohorts.
              </p>

              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <p
                  className="text-blue-800 font-medium"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.4",
                  }}
                >
                  <strong>Good news for pilot program participants!</strong>
                </p>
                <p
                  className="text-blue-700 mt-2"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.5",
                  }}
                >
                  If you registered for our pilot program, you&apos;re getting a
                  special discounted rate. Don&apos;t be alarmed about the price
                  difference - you were lucky to be part of our inaugural cohort
                  at a reduced cost.
                </p>
              </div>

              <p
                className="text-gray-700"
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  lineHeight: "1.5",
                }}
              >
                The prices shown here will be our standard rates for all future
                cohorts.
              </p>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="pt-4">
          <Button
            onClick={onClose}
            className="w-full py-2.5 text-sm sm:text-base font-medium bg-brand-primary hover:bg-brand-secondary transition-all duration-300"
          >
            Got it, thanks!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
