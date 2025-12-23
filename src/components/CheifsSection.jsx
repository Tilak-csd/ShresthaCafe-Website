import { staff } from "../data/KitchenStaff";
import { motion } from 'motion/react'

export default function ChefsSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid gap-12 md:grid-cols-3">

          {staff.map((member, idx) => {
            return <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{once :true, amount: 0.3}}
              transition={{ duration: 0.6, ease: "easeOut", delay : idx * .2 }}
              key={idx} className="flex flex-col items-center">
              <div className="w-52 h-52 rounded-full overflow-hidden mb-6">
                <img
                  src={member.image}
                  fetchPriority="high"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm max-w-xs">
                {member.slogans}
              </p>
            </motion.div>
          })}

        </div>
      </div>
    </section>
  );
}
