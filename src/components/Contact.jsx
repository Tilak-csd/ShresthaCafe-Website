// import React, { useState } from 'react'
// import { Loader2 } from 'lucide-react'
// import axios from 'axios'
// import Modal from '../utils/Modal'


// export default function Contact() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")

//     const [loading, setLoading] = useState(false);
//     // Modal State
//     const [modal, setModal] = useState({
//         isOpen: false,
//         type: 'success',
//         title: '',
//         message: ''
//     });
//     // close modal function
//     const closeModal = () => setModal({ ...modal, isOpen: false });


//     const querysumbit = async () => {
//         if (!name || !email || !message) {
//             return alert("Please Fill the Form!")
//         }

//         try {
//             setLoading(true)
//             await axios.post(
//                 "https://shrestha-cafe-backend.vercel.app/api/v1/contactmail",
//                 {
//                     name: name,
//                     email: email,
//                     message: message
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 }
//             )
//             // SUCCESS: Use 'name' instead of 'form.name'
//         const firstName = name ? name.split(' ')[0] : 'Guest';
//             // Success Visuals
//             setModal({
//                 isOpen: true,
//                 type: 'success',
//                 title: `Thank You, ${firstName}! for Contacting Us.`,
//                 message: "We've received your request. Check your email for confirmation details."
//             });
//             setEmail("")
//             setName("")
//             setMessage("")

//         } catch (error) {
//             setModal({
//                 isOpen: true,
//                 type: 'error',
//                 title: 'Contact Failed',
//                 message: 'Something went wrong on our end. Please try again or call us directly.'
//             });
//             console.log("Error while sending the message", error);

//         } finally {
//             setLoading(false)
//         }

//     }
//     return (
//         <section id='contact' className="w-full py-5 sm:py-20 bg-gray-50 flex flex-col items-center justify-center">
//             {/* set Modal for teh contact send failed or confirmed */}
//             {modal.isOpen && <Modal closeModal={closeModal} modal={modal} />}
//             <div className="max-w-6xl mx-auto w-full px-4">

//                 <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden'>

//                     {/* Left Side: Info & Form */}
//                     <div className='w-full md:w-1/2 p-8 lg:p-12 flex flex-col gap-10'>

//                         {/* Location details */}
//                         <div>
//                             <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact</h4>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
//                                 <div>
//                                     <p className="font-medium text-gray-900">Address</p>
//                                     <p>MachaPokhari, Kathmandu</p>
//                                     <p>Nepal</p>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium text-gray-900">Contact</p>
//                                     <p>+977 9845231690</p>
//                                     <p>info@shresthacafe.com</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Query Form */}
//                         <div className='flex flex-col gap-4'>
//                             <div className="grid grid-cols-1 gap-4">
//                                 <Input
//                                     onChange={(e) => setName(e.target.value)}
//                                     label="Full Name" type="text" placeholder="John Doe" />
//                                 <Input
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     label="Email Address" type="email" placeholder="john@example.com" />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-sm font-medium text-gray-700">Message</label>
//                                 <textarea
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     rows="4"
//                                     placeholder="How can we help you?"
//                                     className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
//                                 ></textarea>
//                             </div>
//                             <button onClick={querysumbit} className='flex justify-center items-center gap-3 bg-black cursor-pointer hover:scale-105 transition-all duration-300 active:scale-105 text-white font-semibold py-3 px-6 rounded-lg shadow-md'>
//                                 {loading ? (
//                                     <>
//                                         <Loader2 className="animate-spin" size={20} />
//                                         Processing...
//                                     </>
//                                 ) : (
//                                     "Send Message"
//                                 )}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Side: Image */}
//                     <div className='hidden md:block md:w-1/2 relative'>
//                         <img
//                             src="/contact/side_image.webp"
//                             alt="Shrestha Cafe Interior"
//                             className="w-full h-full object-cover"
//                         />
//                         {/* Overlay to soften the image if needed */}
//                         <div className="absolute inset-0 bg-black/10"></div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function Input({ label, type, placeholder, onChange }) {
//     return (
//         <div className="flex flex-col gap-1 w-full">
//             <label className="text-sm font-medium text-gray-700">{label}</label>
//             <input
//                 type={type}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
//             />
//         </div>
//     );
// }



// New Design for the Contact Page
import React, { useState } from 'react'
import { Loader2, MapPin, Phone, Mail, Clock } from 'lucide-react'
import axios from 'axios'
import Modal from '../utils/Modal'

// ── Injected styles ───────────────────────────────────────────────────────────
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');

    .contact-section { font-family: 'DM Sans', sans-serif; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up-1 { animation: fadeUp 0.5s ease 0.05s both; }
    .fade-up-2 { animation: fadeUp 0.5s ease 0.15s both; }
    .fade-up-3 { animation: fadeUp 0.5s ease 0.25s both; }

    /* Input base */
    .cf-input {
      width: 100%;
      background: #faf7f2;
      border: 1.5px solid #e4ddd3;
      border-radius: 10px;
      padding: 13px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: #2c2416;
      outline: none;
      transition: border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
      box-sizing: border-box;
    }
    .cf-input::placeholder { color: #b8a898; }
    .cf-input:focus {
      border-color: #3d5230;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(61,82,48,0.08);
    }

    /* Submit button */
    .cf-submit {
      width: 100%;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      background: #2c2416;
      color: #faf7f2;
      border: none;
      border-radius: 10px;
      padding: 15px 28px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px; font-weight: 500;
      letter-spacing: 0.04em;
      cursor: pointer;
      transition: all 0.28s cubic-bezier(.22,.68,0,1.2);
    }
    .cf-submit:hover {
      background: #3d5230;
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(61,82,48,0.22);
    }
    .cf-submit:active { transform: translateY(0); }

    /* Info cards */
    .info-pill {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 18px 20px;
      background: #faf7f2;
      border: 1px solid #e4ddd3;
      border-radius: 12px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .info-pill:hover {
      border-color: #b5c4a8;
      box-shadow: 0 4px 16px rgba(61,82,48,0.08);
    }

    /* Right panel decorative strip */
    .right-strip {
      position: absolute; top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(to bottom, #3d5230, #7a9968, #e4ddd3);
      border-radius: 4px 0 0 4px;
    }

    /* Label */
    .cf-label {
      font-size: 12px; font-weight: 500;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: #7a6a5e; margin-bottom: 6px; display: block;
    }

    /* Divider */
    .cf-divider {
      height: 1px;
      background: linear-gradient(to right, #e4ddd3, transparent);
      margin: 4px 0 20px;
    }
  `}</style>
);

// ── Info Pill ─────────────────────────────────────────────────────────────────
function InfoPill({ icon: Icon, label, lines }) {
  return (
    <div className="info-pill">
      <div style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: '#edf0e8', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={16} color="#3d5230" strokeWidth={1.8} />
      </div>
      <div>
        <p style={{ margin: '0 0 3px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9e8f7a' }}>
          {label}
        </p>
        {lines.map((l, i) => (
          <p key={i} style={{ margin: 0, fontSize: 13.5, color: '#2c2416', lineHeight: 1.6, fontWeight: i === 0 ? 400 : 300 }}>
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label className="cf-label">{label}</label>
      {children}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Contact() {
  const [name,    setName]    = useState("")
  const [email,   setEmail]   = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [modal,   setModal]   = useState({ isOpen: false, type: 'success', title: '', message: '' })

  const closeModal = () => setModal({ ...modal, isOpen: false })

  const querysumbit = async () => {
    if (!name || !email || !message) return alert("Please Fill the Form!")
    try {
      setLoading(true)
      await axios.post(
        "https://shrestha-cafe-backend.vercel.app/api/v1/contactmail",
        { name, email, message },
        { headers: { "Content-Type": "application/json" } }
      )
      const firstName = name ? name.split(' ')[0] : 'Guest'
      setModal({
        isOpen: true, type: 'success',
        title: `Thank You, ${firstName}! for Contacting Us.`,
        message: "We've received your request. Check your email for confirmation details."
      })
      setEmail(""); setName(""); setMessage("")
    } catch (error) {
      setModal({
        isOpen: true, type: 'error',
        title: 'Contact Failed',
        message: 'Something went wrong on our end. Please try again or call us directly.'
      })
      console.log("Error while sending the message", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Styles />
      <section id="contact" className="contact-section" style={{
        width: '100%',
        background: '#faf7f2',
        padding: '80px 0 100px',
      }}>
        {modal.isOpen && <Modal closeModal={closeModal} modal={modal} />}

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Section header ── */}
          <div className="fade-up-1" style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7a9968" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a9968' }}>
                Get in Touch · Shrestha Café
              </span>
              <div style={{ flex: 1, height: 1, background: '#e4ddd3' }} />
            </div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 300,
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              color: '#2c2416', margin: '0 0 14px', lineHeight: 1.0, letterSpacing: '-0.02em',
            }}>
              We'd love to <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>hear</em><br />from you
            </h1>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 15, color: '#9e8f7a', margin: 0, lineHeight: 1.7, maxWidth: 440 }}>
              Whether it's a reservation question, feedback, or just a kind note — drop us a message and we'll get back to you shortly.
            </p>
          </div>

          {/* ── Two-column layout ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 28,
            alignItems: 'start',
          }}>

            {/* ── LEFT: Form card ── */}
            <div className="fade-up-2" style={{
              background: '#fff',
              border: '1px solid #e8e4dc',
              borderRadius: 20,
              padding: '36px 36px 40px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
            }}>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 22, color: '#2c2416', margin: '0 0 6px' }}>
                Send us a message
              </h2>
              <div className="cf-divider" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Field label="Your name">
                  <input
                    className="cf-input"
                    type="text"
                    placeholder="e.g. Priya Shrestha"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Field>

                <Field label="Email address">
                  <input
                    className="cf-input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Field>

                <Field label="Your message">
                  <textarea
                    className="cf-input"
                    rows={5}
                    placeholder="Tell us how we can help…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{ resize: 'none' }}
                  />
                </Field>

                <button className="cf-submit" onClick={querysumbit} disabled={loading}>
                  {loading ? (
                    <><Loader2 className="animate-spin" size={18} /> Sending…</>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </>
                  )}
                </button>

                <p style={{ margin: 0, textAlign: 'center', fontSize: 12, color: '#b8a898', fontWeight: 300 }}>
                  We typically reply within 24 hours ☕
                </p>
              </div>
            </div>

            {/* ── RIGHT: Info + image ── */}
            <div className="fade-up-3" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Info pills grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <InfoPill icon={MapPin} label="Address" lines={["MachaPokhari", "Kathmandu, Nepal"]} />
                <InfoPill icon={Phone}  label="Phone"   lines={["+977 9700004569"]} />
                <InfoPill icon={Mail}   label="Email"   lines={["info@shresthacafe.com"]} />
                <InfoPill icon={Clock}  label="Hours"   lines={["Mon–Sat 8am–9pm", "Sun 9am–8pm"]} />
              </div>

              {/* Image card */}
              <div style={{
                position: 'relative',
                borderRadius: 18,
                overflow: 'hidden',
                aspectRatio: '16/9',
                border: '1px solid #e4ddd3',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}>
                <img
                  src="/contact/side_image.webp"
                  alt="Shrestha Cafe Interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Warm overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(44,36,22,0.35) 0%, transparent 60%)',
                }} />
                {/* Caption */}
                <div style={{
                  position: 'absolute', bottom: 18, left: 20,
                  fontFamily: "'Fraunces',serif", fontStyle: 'italic',
                  fontWeight: 300, fontSize: 18, color: '#fff',
                  textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                }}>
                  "A warm place to gather."
                </div>
              </div>

              {/* Decorative note */}
              <div style={{
                padding: '16px 20px',
                background: '#edf0e8',
                borderRadius: 12,
                border: '1px solid #d0dac8',
                display: 'flex', gap: 12, alignItems: 'center',
              }}>
                <span style={{ fontSize: 20 }}>🌿</span>
                <p style={{ margin: 0, fontSize: 13, color: '#4a6338', fontWeight: 400, lineHeight: 1.6 }}>
                  Prefer to visit in person? We're always happy to welcome you at the café — no appointment needed.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}