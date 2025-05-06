import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function NaturallyRadiantCase() {
  return (
    <>
      <Navigation textColor={true} />

      <section className="flex flex-col items-center justify-start text-black py-[120px] px-[50px] md:px-[80px]">
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-[80px]">
          <div className="flex flex-col items-start justify-start w-full md:w-[55%] gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-[16px] text-cyan-600 font-medium tracking-wide uppercase">Case Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Custom Scheduling & Payment Integration for Naturally Radiant</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-[600px]">
              Streamlining practitioner scheduling, improving record management, and modernizing in-person payment processing for a leading wellness & holistic health provider.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-4">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-cyan-600">100%</p>
                <p className="text-sm text-gray-600">Centralized Data</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-cyan-600">2x</p>
                <p className="text-sm text-gray-600">Time Saved</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-cyan-600">Improved</p>
                <p className="text-sm text-gray-600">Cash Flow</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-bold text-cyan-600">Scalable</p>
                <p className="text-sm text-gray-600">Future Ready</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-50 to-gray-50 p-8">
              <Image 
                src="/works/Naturally_Radiant.png"
                alt="Naturally Radiant Scheduling and Payment Interface"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black py-[100px] px-[50px] md:px-[80px] flex flex-col gap-[80px]">
        <SectionBlock title="Problem (First Principle Breakdown)" color="cyan-400">
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><b>Scheduling Challenge:</b> Square's limited scheduling tools lacked robust customization, filtering, and centralized practitioner profile management.</li>
            <li><b>Operational Gaps:</b> No reliable backend to track appointments, associate them with practitioner profiles, or automate reminders efficiently.</li>
            <li><b>POS Limitation:</b> Square's payment flow was siloed and lacked customization; in-person payments weren't integrated into a broader operational view.</li>
          </ul>
        </SectionBlock>
        <SectionBlock title="Solution (Designed from First Principles)" color="cyan-400">
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><b>Custom Booking Workflow:</b> Replaced Square booking with a custom scheduling system integrated into Airtable, turning appointment data into live, trackable records. Leveraged automation tools like <b>MAKE</b> and <b>n8n</b> to connect systems, automate reminders, and streamline practitioner coordination. Each practitioner now has a dynamic profile with associated appointments, history, and availability. Automated reminders and scheduling logic reduced manual coordination.</li>
            <li><b>Upgraded POS to Helcium:</b> Integrated Helcium for in-person payments, allowing better tracking, syncing, and reporting of physical transactions. Created a single source of truth for revenue, appointments, and practitioner performance metrics.</li>
          </ul>
        </SectionBlock>
        <SectionBlock title="Business Value Delivered" color="cyan-400">
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><b>Centralized Data:</b> All appointments, payments, and practitioner activity are now viewable and manageable in Airtable.</li>
            <li><b>Time Saved:</b> Manual appointment tracking, confirmation, and follow-up coordination significantly reduced.</li>
            <li><b>Improved Cash Flow Management:</b> In-person transactions are now seamlessly recorded with Helcium integration, reducing financial blind spots.</li>
            <li><b>Scalability Enabled:</b> The new system can support multiple practitioners, clients, and locations—future-proofing their operations.</li>
          </ul>
        </SectionBlock>
        <SectionBlock title="Strategic Skills Demonstrated" color="cyan-400">
          <ul className="list-disc pl-6 text-white space-y-4">
            <li>Systems design thinking (replacing generic software with tailored workflows)</li>
            <li>Low-code/no-code architecture (leveraging Airtable for scalability and clarity)</li>
            <li>Automation platform integration (<b>MAKE</b>, <b>n8n</b>) for workflow orchestration</li>
            <li>POS integration and payment operations optimization</li>
            <li>Operational automation in client-facing health businesses</li>
          </ul>
        </SectionBlock>
      </section>

      <section className="h-[70vh] bg-white py-[100px] px-[50px] text-black flex flex-col items-start justify-center">
        <h3 className="text-[16px] text-gray-500 max-w-[800px]">
          "OnCode's custom scheduling and payment integration has transformed our operations. We now have full visibility into appointments and revenue, and our practitioners spend less time on admin and more time with clients."
        </h3>
        <p className="text-[16px] text-gray-500">Naturally Radiant Team</p>
        <div className="w-full h-[1px] mt-[40px] bg-gray-300"></div>
        {/* <Link
          href="/casetudies/invoice-magi"
          className="text-[14px] mt-[20px] text-gray-500"
        >
          Next Case Study
        </Link> */}
      </section>

      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Ready to modernize your operations?
        </h2>
        <Link
          href="/contact"
          className="bg-white text-black px-[20px] py-[10px] rounded-[5px] hover:bg-gray-200 transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <Footer />
    </>
  );
}

function SectionBlock({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
      <div className="flex flex-col items-start justify-start md:w-[200px]">
        <p className={`text-[16px] text-${color} font-medium tracking-wide uppercase`}>{title}</p>
      </div>
      <div className="flex flex-col items-start justify-start flex-1">
        <div className="bg-gray-900 p-8 rounded-xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
} 