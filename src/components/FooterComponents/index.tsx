import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const FooterComponents = () => {
  return (
    <div>
      <footer className="py-12 text-muted-foreground dark:text-white">
        <div className="container mx-auto flex flex-col flex-wrap justify-between max-w-8xl px-12 gap-12 md:flex-row ">
          <div id="contact" className="space-y-4">
            <h1 className="text-2xl font-bold">Get in Touch</h1>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full bg-blue-500">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">More About Me</h1>
            <p>Explore more and connect with me online:</p>
            <div className="flex items-center space-x-4">
              <Link
                aria-label="Visit Muhammad Saeful R's GitHub profile"
                href="https://github.com/muhammadsaefulr/"
                className="text-lg hover:underline"
                prefetch={false}
              >
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link
                aria-label="See Muhammad Saeful R's Linkedin"
                title="my linkedin"
                href="https://www.linkedin.com/in/muhammadsaeful/"
                className="text-lg hover:underline"
                prefetch={false}
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                aria-label="Muhammad Saeful R's Instagram"
                href="https://www.instagram.com/msaepul07_/"
                className="text-lg hover:underline"
                prefetch={false}
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm">
          <p className="pt-6">
            &copy; 2024 Muhammad Saeful R - Made With &#x2764;
          </p>
        </div>
      </footer>
    </div>
  );
};
