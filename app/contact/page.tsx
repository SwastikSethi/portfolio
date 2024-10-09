"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Contact info data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 94637585274",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "swastiksethi7@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Sector 30B Chandigarh, India",
  },
];

const Contact = () => {
  // React Hook Form setup
  const { register, handleSubmit, reset } = useForm();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;
  // console.log(serviceId);
  // Function to handle form submission via EmailJS
  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(
        serviceId ? serviceId : "",
        templateId ? templateId : "",
        data,
        userId ? userId : ""
      );
      alert("Message sent successfully!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Message sending failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-primary rounded-xl"
            >
              <h3 className="text-4xl text-blue-700">
                Let&apos;s Work together
              </h3>

              {/* input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                />
                <Input
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                />
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                />
                <Input {...register("phone")} type="tel" placeholder="Phone" />
              </div>

              {/* message textarea */}
              <Textarea
                {...register("message", { required: true })}
                className="h-[180px]"
                placeholder="Type your message."
              />

              {/* submit button */}
              <Button type="submit" size="md" className="">
                Send Message
              </Button>
            </form>
          </div>

          {/* info section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-700 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
