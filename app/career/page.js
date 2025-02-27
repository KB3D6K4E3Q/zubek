"use client";
import { motion } from "framer-motion";

export default function Career() {
  return (
<section className="bg-[#ffff] text-black h-full w-full flex justify-center items-center px-4 overflow-hidden">
  <div className="max-w-2xl w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="font-bold text-4xl sm:text-5xl leading-tight mt-10">
        Six Months. <br />
        Multiple Projects. <br />
        One Designer.
      </h1>
      {/* Overview */}
      <p className="mt-6 text-gray-700 text-base sm:text-lg">
        <span className="font-semibold">01. OVERVIEW</span> <br />
        Dive into my six-month journey as a UX designer, where I navigated a fast-paced environment, managed multiple projects, and developed websites
        from the ground up. This case study showcases how I crafted user-centric solutions, optimized workflows, and applied technical expertise to overcome real-world challenges.
      </p>
      <p className="mt-4 text-gray-500 text-sm">
        <strong>Note:</strong> Some details have been omitted for confidentiality, focusing on the work itself.
      </p>
      {/* Picture */}
      <motion.img
        src="/assets/pictures/Prequel.png"
        alt="Crave"
        className="rounded-2xl mt-12 shadow-2xl w-full h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
        <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />
        <div className="md:flex md:items-start md:justify-between text-left mt-6">
          <div className="md:w-1/2">
            <h2 className="text-gray-600 text-md font-semibold uppercase">02. Role</h2>
            <h3 className="text-black font-bold lg:text-6xl mt-2 sm:text-5xl md:text-5xl">Uncharted Territory</h3>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
            At just 13 years old, while in 7th grade, I wanted to do something different.
            Instead of following the usual path, I immersed myself in web design and development,
            eager to create and innovate. What started as curiosity quickly turned into a passion,
            driving me to explore the digital world and refine my skills.
            </p>
            <h4 className="mt-6 font-bold text-lg">Outcomes</h4>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li><strong>Leasing Data Project:</strong> Developed a business case that laid the groundwork for a game-changing feature in commercial real estate management.</li>
              <li><strong>Charts and Tables Enhancement:</strong> Designed improvements to data visualization, making complex property data more accessible.</li>
              <li><strong>Retail Experience:</strong> Proposed strategies to maintain momentum and ensure our retail experience remained a core offering.</li>
              <li><strong>Process and Ways of Working:</strong> Delivered recommendations aimed at streamlining the design process for scalable growth.</li>
            </ul>
          </div>
          <motion.img
            src="/assets/pictures/Astro.png"
            alt="Illustration"
            className="sm:w-[5vw] md:w-[40vw] lg:w-[40vw] md:ml-12 mt-8 md:mt-0
            mx-auto md:mx-0 h-auto object-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

        </div>
        <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />

    {/* Chaos meets Simplicity */}
      <div className="text-center mt-10">
        <h3 className="text-gray-500 text-sm font-semibold uppercase">03. Key Challenges</h3>
        <h1 className="text-black font-bold text-4xl md:text-6xl mt-2">Chaos Meets Simplicity</h1>
      </div>

      {/* Challenge & Solution */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenge */}
        <div>
          <h2 className="font-bold text-xl">Challenge</h2>
          <p className="mt-4 text-gray-700 text-lg">
          As the sole UX designer for the entire product, I juggled four projects
           simultaneously, balancing design strategy, user experience optimization,
           and seamless execution: {''}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
            <li>Leasing Data Project</li>
            <li>Charts and Table Enhancement</li>
            <li>Retail Experience Enhancements</li>
            <li>Process and Ways of Working Recommendation</li>
          </ul>
          <p className="mt-4 text-gray-700 text-lg">
            Each project had its own challenges, stakeholders, and tight deadlines. The pressure was on to deliver top-notch work across the board while getting up to speed with the commercial real estate industry.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="font-bold text-xl">Solution</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Realizing I needed a game plan to stay sane and productive, I turned to the <strong>70-20-10 Rule</strong> to prioritize my efforts:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
            <li><strong>70%</strong> on the highest priority (Leasing Data Project)</li>
            <li><strong>20%</strong> on the second priority (Charts and Table Enhancement)</li>
            <li><strong>10%</strong> split between the remaining two (Retail Experience and Process Improvement)</li>
          </ul>
          <p className="mt-4 text-gray-700 text-lg">
            This wasn't a rigid rule but gave me a solid framework to manage my time and energy effectively.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <motion.img
          src="/assets/pictures/TheRule.png"
          alt="Illustration"
          className="lg:max-w-[70vw] sm:max-w-[80vw] h-auto object-contain mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {/* 70 20 */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-bold text-xl">Weekly Breakdown</h2>
          <p className="mt-4 text-gray-700 text-lg text-left">
          I structured my days around 90- to 120-minute deep work sessions,
           ensuring focused productivity. While unexpected challenges arose,
           I prioritized at least two dedicated blocks for high-impact tasks.
            The rest of my schedule remained flexible, allowing me to adapt to
            the evolving needs of each project.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg text-left">
            <p>
             <strong>Monday-Thurday</strong>
            </p>
            <li><strong>4-6 hours: </strong> Deeep work high-priority tasks</li>
            <li><strong>2 hours: </strong> Work on the second priority</li>
            <li><strong>1 hour:</strong> Tertiary tasks</li>
            <p>
             <strong>Friday</strong>
             <li><strong>Morning: </strong> Retail Experience and Process Improvement</li>
            <li><strong>Afternoon: </strong>Plan for the next week and tie up loose ends</li>
            </p>
          </ul>
        </div>

        <div className='text-left'>
          <h2 className="font-bold text-xl">Dealing with Reality</h2>
          <p className="mt-4 text-gray-700 text-lg">
          No week ever went exactly as planned. Here's how I handled the curveballs.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg text-left">
            <li><strong>Urgent Requests: </strong> I build in a buffer during afternoon
            sessions for any urgent issues. If something couldn't wait, it got slotted in here</li>
            <li><strong>Shifting Priorities: </strong> If a project needed more attention, I'd
            adjust my 70-20-10 split and keep stakeholders in the loop.</li>
            <li><strong>Energy Levels: </strong> I'd tackle high-energy tasks (like
            creative design work) when I was at my peak and saved less demanding tasks
            (like documentation) for when I needed a breather.</li>
          </ul>
          <p className="mt-4 text-gray-700 text-lg text-left">
           This system wasn't perfect, but it helped me keep all the plates
           spinning without losing focus. Flexibility within a structured framework
           was key.
          </p>
        </div>
      </div>
      <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />
       {/* DEVELOPMENT  */}
       <div className="text-center mt-10">
        <h3 className="text-gray-500 text-sm font-semibold uppercase">05. UX DESIGN</h3>
        <h1 className="text-black font-bold text-4xl md:text-6xl mt-2">No Scenic Route, <br /> Just Speed</h1>
        <p className="mt-6 text-gray-700 lg:text-2xl sm:text-lg">
          Solving core problems goes beyond development--it <br />
          starts with effective resource allocation. With a <br />
          fresh perspective, I identified key to process <br />
          improvements to {' '}
         <strong>accelerate the work.</strong>
        </p>
        <motion.img
          src="/assets/pictures/CarePulse.png"
          alt="CarePulse"
          className="rounded-2xl h-auto w-full mt-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 text-left">
  {/* Column 1 */}
  <div>
    <h2 className="font-bold text-2xl">Problem</h2>
    <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
      <li><strong>Resource Crumch: </strong>Being the lone designer, the workload
      was hefty. Designs often weren't fully fleshed out before hitting development,
      leaving developers without enough guidance.</li>
      <li><strong>Design-Development Disconnect: </strong>The procces didn't facillitate
      smooth collaboration between design and development, leading to extra time spent
      on QA to fix overlooked gaps.</li>
      <li><strong>Lack of Users Testing: </strong>Without formal reseach and testing,
      I risked building features that might miss that mark.
      </li>
    </ul>
  </div>

  {/* Column 2 */}
  <div className="gap-2">
    <h2 className="font-bold text-2xl">Solution</h2>
    <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
      <li><strong>Out-of-the-Box Efficiency: </strong>Rather than building everything
      from scratch, I started using off-the-shelf to cover about 70% of our needs
      immedietely. </li>
      <li><strong>Design Tokens for Consistency: </strong>Proposed implementing desing
      tokens to unify desing and development, reducing rework and ensuring everything
      looks and feels cohesive.</li>
      <li><strong>Rapid Prototyping and Testing</strong>By leveraging existing solutions,
      I could quickly create prototypes and present them to customers sooner,
      enabling us to fine-features before launch.
      </li>
    </ul>
  </div>

  {/* Column 3 (Centered in md, normal in lg) */}
  <div className="md:col-span-2 lg:col-span-1 mx-auto">
    <h2 className="font-bold text-2xl">Payoff</h2>
    <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
      <li><strong>Jumpstart Efficiency: </strong>Meeting 70% of our requirements
      upfront would mean starting each project with a running start.</li>
      <li><strong>Focus on the Critical 30%: </strong>Freeeing up time to polish
      the customer experience where it really couted.</li>
      <li><strong>Faster Discovery and Iteration: </strong>Early testing and feedback
      loops would help us spot new opportunities quicker.</li>
    </ul>
  </div>
</div>
      </div>
  {/* UX STRATEGY */}
  <div className="flex flex-col items-center justify-center px-6 md:px-16 py-16">
  <h1 className="text-4xl lg:mt-10 lg:text-[5vw] font-bold text-center mb-12">UX Strategy</h1>

  <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">

    {/* 70% Boring */}
    <div className="bg-gray-300 p-8 rounded-[2rem] flex-1 w-full sm:min-w-[300px] sm:max-w-[400px]">
      <h2 className="text-3xl sm:text-4xl font-bold">70% Boring</h2>
      <p className="text-left mt-4 text-gray-800 text-base sm:text-lg">
        Our UX strategy centres on <strong>Jakob's Law</strong>, which states:
        <span className="font-bold"> "Users spend most of their time on other websites, so they expect your site to work like all the others they already know."</span>
      </p>
      <p className="text-left mt-4 text-gray-800 text-base sm:text-lg">
        By mirroring design elements from popular websites and apps, we're aiming to make our users feel right at home. This approach taps into their existing mental models and learned behaviors, reducing cognitive load, smoothing out the learning curve, and boosting overall user satisfaction and efficiency.
      </p>
    </div>

    {/* 30% Magic */}
    <div className="bg-black text-white p-8 rounded-[2rem] flex-1 w-full sm:min-w-[300px] sm:max-w-[400px]">
      <h2 className="text-3xl sm:text-4xl font-bold">30% Magic</h2>
      <p className="text-left mt-4 text-base sm:text-lg">
        In data visualization, it's often the small UI decisions that make all the difference. Elements like typography, spacing, and content play crucial roles in how users perceive and interpret data.
      </p>
      <p className="text-left mt-4 text-base sm:text-lg">
        By honing in on these nuances, we can enhance the user experience and convey information more effectively.
      </p>
    </div>
  </div>
      <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />

    <p className="mt-6 text-gray-700 text-xl font-semibold">
         Design Foundation
        </p>
      <h1 className="font-bold text-5xl lg:text-[5vw] sm:text-5xl leading-tight mt-2">
          The Power of Boring
        </h1>
        <p className="mt-6 text-gray-700 text-xl text-center">
         With no design resources and no room for deep-dive user
         research, I anorched my OX strategy <strong>Jakob's Law:</strong>
         users spend most of their time on other sites, so they
         expect yours to feel familiar.
        </p>
        <p className="mt-6 text-gray-700 text-xl text-center">
          Inspired by <strong>Youtube</strong>, the second most visited site in the
          world, I designed an experience with <strong>zero learning curve.</strong>
          This approach aims to minimise onboarding time and streamline future develpment
          by leveraging patterns users already know by heart.
        </p>
         <hr className="mt-6 border-t border-gray-300 w-3/4 mx-auto" />

         <p className="mt-6 text-gray-700 text-xl font-semibold">
        06. CLOSING
        </p>
      <h1 className="font-bold text-5xl lg:text-[5vw] sm:text-5xl leading-tight mt-2">
         Jorney Ends
        </h1>
        <p className="mt-6 text-gray-700 text-xl text-center">
       This jouney was a test of adaptability and focus, pushing me to grow
       in unexpected ways. Here are some stadnout moments.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg text-left">
            <p>
             <strong>Winning Moments</strong>
            </p>
            <li><strong>Delivered Solo: </strong>Covered all projects requirements as
            the sole designer&developer across many major projects</li>
            <li><strong>Sanity with 70-20-10: </strong>The 70-20-10 rule kept me organized.
            Dedicating 70% of my time to top priorities ensured deep focus without neglecting
            other responsibilities.</li>
            <li><strong>Adapted Beyond Fintech: </strong>Quickly learned the nuances
            of commertial real estate to deliver effective design in a new industry.</li>
          </ul>
        </div>

        <div className='text-left'>
          <h2 className="font-bold text-xl">Lessons Learned</h2>
          <ul className="list-disc list-inside mt-4 text-gray-700 text-lg text-left">
            <li><strong>Strategy and Details Matter: </strong>Balacing overarching
            strategies with UI details is crutial. I applied Jakob's Law for
            usability while fine-tuning typography to improve readability.</li>
            <li><strong>Progress Within Costraints: </strong>Found ways to drive
            progress despite limited resources and fixed scope, like leveraging existing
            design systems to cut development time.</li>
            <li><strong>Stay Flexible: </strong>Adjusted the 70-20-10 rule as project
            priorities shifted-for instance, rellocated at time when the Charts and Tables
            Enhancement became urgent.</li>
          </ul>
        </div>
      </div>
    </div>
     </div>
    </section>
  );
}
