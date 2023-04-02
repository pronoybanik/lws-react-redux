import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const CoursePlayer = () => {
    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-7xl px-5 lg:px-0">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    <div class="col-span-full w-full space-y-8 lg:col-span-2">
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/56zUkaXJnUA"
                            title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                        <div>
                            <h1 class="text-lg font-semibold tracking-tight text-slate-100">
                                Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023
                            </h1>
                            <h2 class=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                                Uploaded on 23 February
                                2020</h2>

                            <div class="flex gap-4">
                                <a href="#"
                                    class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                    এসাইনমেন্ট
                                </a>

                                <a href="./Quiz.html"
                                    class="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">কুইজে
                                    অংশগ্রহণ
                                    করুন</a>
                            </div>
                            <p class="mt-4 text-sm text-slate-400 leading-6">
                                আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ
                                কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ
                                পর্যন্ত বুঝতে না
                                পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি
                                যেগুলো
                                বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে
                                আর কনফিউশন
                                থাকবেনা।
                            </p>


                        </div>
                    </div>
                    <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">

                        <div class="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
                            {/* <!-- Thumbnail --> */}
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            {/* <!-- Description --> */}
                            <div clas="flex flex-col w-full">
                                <a href="#">
                                    <p class="text-slate-50 text-sm font-medium">Things I wish I knew as a Junior Web
                                        Developer - Sumit Saha - BASIS SoftExpo 2023</p>
                                </a>
                                <div>
                                    <span class="text-gray-400 text-xs mt-1">34.5 Mins</span>
                                    <span class="text-gray-400 text-xs mt-1"> | </span>
                                    <span class="text-gray-400 text-xs mt-1">241K views</span>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2">
                            {/* <!-- Thumbnail --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            {/* <!-- Description --> */}
                            <div clas="flex flex-col w-full">
                                <a href="#">
                                    <p class="text-slate-50 text-sm font-medium">Introduction to Couse</p>
                                </a>
                                <div>
                                    <span class="text-gray-400 text-xs mt-1">34.5 Mins</span>
                                    <span class="text-gray-400 text-xs mt-1"> | </span>
                                    <span class="text-gray-400 text-xs mt-1">241K views</span>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2">
                            {/* <!-- Thumbnail --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            {/* <!-- Description --> */}
                            <div clas="flex flex-col w-full">
                                <a href="#">
                                    <p class="text-slate-50 text-sm font-medium">Introduction to Couse</p>
                                </a>
                                <div>
                                    <span class="text-gray-400 text-xs mt-1">34.5 Mins</span>
                                    <span class="text-gray-400 text-xs mt-1"> | </span>
                                    <span class="text-gray-400 text-xs mt-1">241K views</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    );
};

export default CoursePlayer;