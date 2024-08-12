import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Libimg from './Library.png'
// import Courosel from './components/Courosel'
import Footer from './components/Footer'
import Explore from './components/Explore'
import Store from './components/Store'
// import Library from './path/to/Library.png';

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      {/* <Courosel /> */}
      {/* <Store /> */}
      <Homepage />
      {/* <Explore /> */}
      <Footer />
      <h1 className='text-6xl font-bold  relative left-40 my-4 -z-10'>Sign Up</h1>
      <div className="container border-2 bg-transparent flex flex-row justify-between mx-auto my-2 rounded-lg w-4/5 h-fit py-3 px-5 shadow-lg">
        <div className="signup w-3/5 p-1 duration-100 hover:shadow-lg rounded-lg">
          <div className='text-5xl font-bold my-2'>Welcome!</div>
          <h1 className='text-2xl font-bold'>Create Account</h1>
          <div className='mx-1 my-2 w-3/5'>
            <h1 className='text-xs py-1'>Sign up via</h1>
            <ul className='flex flex-row gap-4 items-center justify-center my-auto '>
              <li className='bg-slate-100 duration-100 rounded-xl hover:bg-slate-200'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="></img></li>
              <li className='bg-slate-100 duration-100 rounded-xl hover:bg-slate-200'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg=="></img></li>
              <li className='bg-slate-100 duration-100 rounded-xl hover:bg-slate-200'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO1ZS0vjUBTOD5mBXJtWRFs3Yg10UVAXBd3YKl20C920iH9AsBTXbnzWhT9A+qCCoHRVsUW6bSmKdNOHC0E6pY74AB9nOGcmmaidcZrBJIscOIvc3LTfl3u+e74kHGeGGWaYYdiwWCxfeZ5P8Tz/nTEGWib/8z/3eJ7vVQ2eMfZNa+DsfbYQS9cE8M4bADz8yoQaApqXDftzOV13TUBv0OxNmgSYuQLMOCUkCAIUi0XoFIlE4p8Azc3NwdPTE2SzWfo9zTUwPj4O9/f38PLyAplMBg4ODqBcLhOJcDj812snJyfh9vaW5vf39+sn4mg0SoBXV1fp2OFwwMXFBbRaLXA6nR2vEUURLi8vKUVR1HcX6unpgaOjIyoFr9dLY9PT03Scy+XovHK+3W6H8/NzuLm5AY/HY4xtdGhoCJrNJtTrdRgYGKCx7e1tWplIJCLPs1qtkM/n4fHxEYLBoL4iZm8yFAoR4N3dXRlsqVSCu7s7GBsbo5VIJpM0Z2lpqWvwTItGJgGcn59/JXIU6traGp3b2tpSBZ5pQQB3k1qtRgIeHh6mseXlZXl73d/ff6cJZiQCmD6fjwR8fHxMYDFPTk5oqw0EAqrBMy29UCwWe1XrIyMjtCqNRkMWuaEJCIIAp6en8PDwQAJWijwejxufQF9fH5ydnVHZoIBtNltHkRuSgMViIVuB4NPpNAHe2NiQRV6tVl+JnBmNwM7ODoFeWVmRu/Tz8zP4/X46j91aKXJmJAKLi4sEHktFGlMKGG0Ejm1ubqpqaNxnEpidnaU7WygU5JqXUhKwREyy4tilR0dH9ScwMTFB1rhSqcDg4GDHOalUikgsLCzQsdvtlu201WrVjwCWCNriq6srcLlcH3bpdrstW2g0ehjr6+v6EMCmhNsl+p2pqakPAczMzFCZ4Urhw8/h4SE5U6UV14wA1jH6fdxhPnr6UqZks99GXWHFdRGxFsmZBJi5AqBpCfHGernbVqOBPb2Bs98ZV7MCvfhxwQDgm4IgfOH+4ytNAt/P61A213jnVYM3wwwzzOC0iB9GnyQ6otH+2wAAAABJRU5ErkJggg=="></img></li>
            </ul>
          </div>
          <hr />
          <div className='text-xs my-2'>Sign up via email</div>
          <form action="" onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col gap-2'>
            <div className='my-0.5'>
              <div className='text-slate-600'>Full Name</div><input type="text" {...register("Full_Name", { required: { value: true, message: "*Required Field" }, pattern: /^[A-Za-z]+$/i })} placeholder='Full Name' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4 ' />
              {errors.Full_Name && <div className='error text-red-600 text-xs'>{errors.Full_Name.message}</div>}
              {errors.pattern && <div>"Wrong Pattern"</div>}
            </div>
            <div className="my-0 5">
              <div className='text-slate-600'>Email</div><input type="email" {...register("Email", { required: { value: true, message: "*Required Field" } })} placeholder='Email' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4 ' />
              {errors.Email && <div className='error text-red-600 text-xs'>{errors.Email.message}</div>}
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600'>Phone Number</div>
              <input type="number" {...register("Phone_Number", { required: { vlaue: true, message: "Phone Number is required" }, maxLength: { value: 10, message: "Phone Number cannot be more than 10" }, minLength: { value: 10, message: "Phone Number should be of 10 digits" } })} placeholder='Phone Number' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4' />
              {errors.Phone_Number && <div className='error text-red-600 text-xs'>{errors.Phone_Number.message}</div>}
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600'>Gender</div>
              <select {...register("Gender", { required: "Gender is required" })} className='outline-none  rounded-lg px-3 w-1/3 bg-slate-100'>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600 '>
                Date of Birth
              </div>
              <input type="date" name='Date of Birth' {...register("DOB", { required: { value: true, message: "*Required Field" } })} className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-1/3' />
              {errors.DOB && <div className='error text-red-600 text-xs'>{errors.DOB.message}</div>}
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600'>Username</div>
              <input type="text" {...register("Username", { required: "*Username is required", minLength: { value: 6, message: "Username must be at least 6 characters long" } })} placeholder='Username' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4' />
              {errors.Username && <div className='error text-red-600 text-xs'>{errors.Username.message}</div>}
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600'>Password</div>
              <input type="password" {...register("Password", { required: "*Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" }, maxLength: { value: 20, message: "Password cannot exceed 20 characters" } })} placeholder='Password' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4' />
              {errors.Password && <div className='error text-red-600 text-xs'>{errors.Password.message}</div>}
            </div>
            <div className='my-0.5'>
              <div className='text-slate-600'>Confirm Password</div>
              <input type="password" {...register("Password", { required: "*Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" }, maxLength: { value: 20, message: "Password cannot exceed 20 characters" } })} placeholder='Confirm Password' className='outline-none bg-slate-100 py-1.5 rounded-lg px-3 w-3/4' />
              {errors.Password && <div className='error text-red-600 text-xs'>{errors.Password.message}</div>}
            </div>

            <div><button className='btn rounded-lg py-1 px-1 w-3/4 my-2 mx-auto bg-black text-white hover:bg-slate-900 duration-150'>Sign up<input type="submit" value="" onClick={() => { }} /></button></div>
          </form>
          <div className="log text-xs">Already have an account? <span className='underline'><a href="/login">Login</a></span></div>
        </div>
        <div className=' w-2/4 my-auto'>
          <img src={Libimg} alt="React Image" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
