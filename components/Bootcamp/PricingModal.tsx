"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Pilot Program Pricing Notice
          </DialogTitle>
          <DialogDescription className="text-left">
            <div className="space-y-4 mt-4">
              <p className="text-gray-700">
                The prices listed on this page are our{" "}
                <strong>standard rates</strong> for upcoming cohorts.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800">
                  <strong>Good news for pilot program participants!</strong>
                </p>
                <p className="text-blue-700 mt-2">
                  If you registered for our pilot program, you&apos;re getting a
                  special discounted rate. Don&apos;t be alarmed about the price
                  difference - you were lucky to be part of our inaugural cohort
                  at a reduced cost.
                </p>
              </div>

              <p className="text-gray-700">
                The prices shown here will be our standard rates for all future
                cohorts.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            Got it, thanks!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
