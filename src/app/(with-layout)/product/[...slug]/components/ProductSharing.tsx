"use client";
import EcButton from "@/components/EcButton/EcButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { useRef } from "react";
import { FaRegCopy, FaShareAlt } from "react-icons/fa";
const socialMedias = [
  {
    name: "Facebook",
    icon: "/images/social_icons/facebook.png",
  },
  {
    name: "Twitter",
    icon: "/images/social_icons/twitter.png",
  },
  {
    name: "Instagram",
    icon: "/images/social_icons/instagram.png",
  },
  {
    name: "WhatsApp",
    icon: "/images/social_icons/whatsapp.png",
  },
];

const ProductSharing = ({ productUrl }: { productUrl: string }) => {
  const linkInputRef = useRef(null);
  const handleCopy = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const linkInput = linkInputRef?.current as any;
    if (!linkInput) {
      return;
    }
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    try {
      await navigator.clipboard.writeText(productUrl);
      toast({
        title: "Success",
        description: "Link copied to clipboard!",
        className: "bg-success text-white text-2xl",
      });
    } catch (err) {
      toast({
        title: "Success",
        description: "Failed to copy",
        variant: "destructive",
      });
    }

    // Deselect the input field
    linkInput.setSelectionRange(0, 0);
  };
  return (
    <div className="flex gap-2 items-center">
      <span className="text-muted">Share</span>

      <Dialog>
        <DialogTrigger asChild>
          <span className="text-2xl cursor-pointer">
            <FaShareAlt />
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share with your friends</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-3">
              <div className="flex gap-3 justify-center">
                {socialMedias.map((item) => (
                  <Image
                    key={item.name}
                    src={item.icon}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-8 md:w-10 rounded-md"
                  />
                ))}
              </div>
              <div className="flex gap-2 max-w-[300px] mx-auto">
                <Input disabled value={productUrl} ref={linkInputRef} />
                <EcButton
                  type="icon"
                  variant="ghost"
                  className="hover:text-white p-0"
                  onClick={handleCopy}
                >
                  <FaRegCopy />
                </EcButton>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductSharing;
