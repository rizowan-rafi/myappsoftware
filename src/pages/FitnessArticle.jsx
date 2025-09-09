import React from 'react';

const FitnessArticlesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div 
          className="relative min-h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22%3E%3Crect width=%221200%22 height=%22400%22 fill=%22%23333%22/%3E%3Ctext x=%22600%22 y=%22200%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2240%22 font-family=%22Arial%22%3EGym Background%3C/text%3E%3C/svg%3E')"
          }}
        >
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Articles & Guides</h1>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Learn how to build muscle, burn fat and stay motivated. These guides<br />
              will teach you how to reach your health and fitness goals.
            </p>
            
            {/* Stats */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 mt-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">4000+</div>
                <div className="text-sm text-gray-300 tracking-wider">ARTICLES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">144M</div>
                <div className="text-sm text-gray-300 tracking-wider">READS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-300 tracking-wider">EXPERTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Categories */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">ARTICLE CATEGORIES</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose a topic you're interested in learning about. If you need a more intent-to-learn place<br />
            to consume and one of our experts will help.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Category Cards */}
          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EMuscle Building%3C/text%3E%3C/svg%3E"
                alt="Muscle Building"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Muscle Building</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EFat Loss%3C/text%3E%3C/svg%3E"
                alt="Fat Loss"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Fat Loss</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3ETraining%3C/text%3E%3C/svg%3E"
                alt="Training"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Training</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3ENutrition%3C/text%3E%3C/svg%3E"
                alt="Nutrition"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Nutrition</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3ESupplements%3C/text%3E%3C/svg%3E"
                alt="Supplements"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Supplements</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EFor Women%3C/text%3E%3C/svg%3E"
                alt="For Women"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">For Women</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EMotivation%3C/text%3E%3C/svg%3E"
                alt="Motivation"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Motivation</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3ERecovery%3C/text%3E%3C/svg%3E"
                alt="Recovery"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Recovery</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3ESports Performance%3C/text%3E%3C/svg%3E"
                alt="Sports Performance"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Sports Performance</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EInjury Prevention%3C/text%3E%3C/svg%3E"
                alt="Injury Prevention"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Injury Prevention</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='14' font-family='Arial'%3EFitness Lifestyle%3C/text%3E%3C/svg%3E"
                alt="Fitness Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Fitness Lifestyle</h3>
          </div>

          <div className="text-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Ctext x='150' y='95' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='12' font-family='Arial'%3EAthlete Profiles%3C/text%3E%3Ctext x='150' y='110' text-anchor='middle' dy='0.3em' fill='%23374151' font-size='12' font-family='Arial'%3E%26 Interviews%3C/text%3E%3C/svg%3E"
                alt="Athlete Profiles & Interviews"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Athlete Profiles & Interviews</h3>
          </div>
        </div>
      </div>

      {/* Most Popular Articles */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">MOST POPULAR ARTICLES</h2>
            <p className="text-gray-600 text-lg">
              The most popular articles, expert guides and videos this week at Muscle & Strength.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EShredded Body%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3E10% Body Fat%3C/text%3E%3C/svg%3E"
                  alt="Shredded Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Shredded! A Complete Guide To Getting to 10% Body Fat</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Getting shredded requires discipline, and secondly diet can be top notch without all quality 
                  changing how you taste food.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Joe Reeves</span>
                  <span>179 Comments</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232563eb'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EBodybuilding%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EDiet Guide%3C/text%3E%3C/svg%3E"
                  alt="Diet Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">How to Create a Bodybuilding Diet</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A frequently asked question we get is: how do you create a bodybuilding diet? This is a basic 
                  teaches bodybuilders how to build their own approaches.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Joe Reeves</span>
                  <span>234 Comments</span>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='200' y='130' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EFull Body%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EWorkouts%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ESerious Gains%3C/text%3E%3C/svg%3E"
                  alt="Full Body Workouts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Forest Steroids: 5 Full Body Workouts For Serious Gains</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Looking to build muscle quickly? Here is a routine to gain real muscle and strong muscle 
                  physiques. This article presents 5 effective workouts.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Bob Paris</span>
                  <span>498 Comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Popular Articles Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234b5563'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EMuscle Building%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ESplit Guide%3C/text%3E%3C/svg%3E"
                  alt="Muscle Building Split"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">The Ultimate Muscle Building Split Reference Guide</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A complete guide. Learn which splits are effective, and which workouts to avoid. Included 
                  are numerous workout and training tips to maximize.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Joe Reeves</span>
                  <span>247 Comments</span>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%233b82f6'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EClean Bulk%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EDiet Options%3C/text%3E%3C/svg%3E"
                  alt="Clean Bulk Diet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">The Clean Bulk Diet: 3 Options For Muscle Growth</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Build lean muscle mass without packing on unwanted body fat. This approach focuses on 
                  eating clean foods & diet setting clean options that can maximize health.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Bob Adams</span>
                  <span>143 Comments</span>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2314b8a6'/%3E%3Ctext x='200' y='130' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EBody Types%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='white' font-size='12' font-family='Arial'%3EEctomorph%3C/text%3E%3Ctext x='200' y='165' text-anchor='middle' dy='0.3em' fill='white' font-size='12' font-family='Arial'%3EMesomorph%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' dy='0.3em' fill='white' font-size='12' font-family='Arial'%3EEndomorph%3C/text%3E%3C/svg%3E"
                  alt="Body Types"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Your Body Type - Ectomorph, Mesomorph or Endomorph?</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Your body type can influence how you respond to different types of workouts and diet plans. 
                  This guide helps you understand your body type.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Rad Sayer</span>
                  <span>412 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Articles */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">NEW ARTICLES</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Just posted on Muscle & Strength. To keep up-to-date workouts, guides, tools, videos etc, be sure to 
              subscribe to our weekly newsletter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* New Article 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%237c3aed'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3ECollagen%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EGuide%3C/text%3E%3C/svg%3E"
                  alt="Collagen Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Complete Guide to Collagen: Benefits, Sources, and How to Use It Daily</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  In this in-depth article, you'll learn what collagen is, why it's essential, how much to take daily, and 
                  the best way to incorporate collagen-rich foods in your supplement list.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By A. Turner</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </div>

            {/* New Article 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23ea580c'/%3E%3Ctext x='200' y='130' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3E25 Lessons%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3E25 Years%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ETraining%3C/text%3E%3C/svg%3E"
                  alt="25 Years Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">25 Lessons After 25 Years of Training</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Looking back over with 25+ valuable lessons on training and nutrition I've learned over the years 
                  from my own self. These tips are backed by science and over 25 years of experience.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Kys. Robert</span>
                  <span>8 Comments</span>
                </div>
              </div>
            </div>

            {/* New Article 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2310b981'/%3E%3Ctext x='200' y='130' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3E3 Active%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ERecovery%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EWorkouts%3C/text%3E%3C/svg%3E"
                  alt="Active Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">3 Active Recovery Workouts for Your Next Rest Day</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  In this article, you'll learn what active recovery is, why it's important for allowing your fitness 
                  goals, plus 3 effective workouts to try on your next rest day.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Dte. Robert</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional New Articles Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* New Article 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234338ca'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3EZone 2%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='16' font-family='Arial'%3ECardio%3C/text%3E%3C/svg%3E"
                  alt="Zone 2 Cardio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">A Beginner's Guide to Zone 2 Cardio</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  In this article, you'll learn about Zone 2, a form of aerobic exercise, and the performance and fat 
                  loss benefits. Use this guide to learn cardio plans to help you reach your fitness goals.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By R. Tubrik</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </div>

            {/* New Article 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23dc2626'/%3E%3Ctext x='200' y='130' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EFull-Body%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ESquat Rack%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ERoutines%3C/text%3E%3C/svg%3E"
                  alt="Squat Rack Routines"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Two Full-Body Squat Rack and Barbell Workout Routines</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  If you have a squat rack and barbells, then you have the gym equipment necessary to build. These two 6-week 
                  programs will help you learn beginner upper and strong lower body.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Dte. Robert</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </div>

            {/* New Article 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231d4ed8'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3EEAA Benefits%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='0.3em' fill='white' font-size='14' font-family='Arial'%3ESupplementation%3C/text%3E%3C/svg%3E"
                  alt="EAA Supplementation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">3 Proven Benefits of EAA Supplementation</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  EAAs play a pivotal role when it comes to protein synthesis. That, your hormones, and muscle growth. In this article learn 
                  all about EAA and how they play a fundamental role in athlete performance.
                </p>
                <div className="flex items-center text-xs text-gray-500 uppercase">
                  <span className="mr-4">By Dte. Robert</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessArticlesPage;