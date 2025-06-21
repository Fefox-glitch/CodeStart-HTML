import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <header className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to CodeStart</h1>
        <p className="text-lg max-w-xl mx-auto">
          Your educational platform to learn coding with hands-on projects and real-world examples.
        </p>
      </header>

      <main className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="bg-black text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">Interactive Tutorials</h2>
          <p>
            Step-by-step coding tutorials with live examples to help you learn by doing.
          </p>
        </section>

        <section className="bg-black text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">Project-Based Learning</h2>
          <p>
            Build real projects that you can showcase in your portfolio and gain practical experience.
          </p>
        </section>

        <section className="bg-black text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">Community Support</h2>
          <p>
            Join a community of learners and mentors to get help, share knowledge, and grow together.
          </p>
        </section>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-600">
        &copy; 2024 CodeStart. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
