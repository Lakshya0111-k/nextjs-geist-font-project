"use client";

import React, { useState } from "react";

const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$9.99/month",
    features: [
      "Access to core sound frequencies",
      "Standard audio quality",
      "Limited playlist creation",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$19.99/month",
    features: [
      "Full library access",
      "High-definition audio quality",
      "Unlimited playlist creation",
      "Offline listening",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Contact us",
    features: [
      "Custom B2B solutions",
      "Dedicated support",
      "API access",
      "Admin dashboard",
    ],
  },
];

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setError("");
  };

  const handleSubscribe = () => {
    if (!selectedPlan) {
      setError("Please select a subscription plan.");
      return;
    }
    // TODO: Integrate payment gateway and subscription logic here
    alert(`Subscribed to ${selectedPlan} plan (demo)`);
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold font-heading mb-8">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 rounded-xl shadow-lg cursor-pointer transition transform hover:scale-105 ${
              selectedPlan === plan.id
                ? "bg-accent-teal text-black"
                : "bg-cosmic-blue bg-opacity-80"
            }`}
            onClick={() => handleSelectPlan(plan.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleSelectPlan(plan.id);
              }
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-6 list-disc list-inside space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-md font-bold transition ${
                selectedPlan === plan.id
                  ? "bg-black text-accent-teal"
                  : "bg-accent-teal text-black hover:bg-teal-500"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlan(plan.id);
                handleSubscribe();
              }}
            >
              {selectedPlan === plan.id ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
      {error && (
        <p className="mt-6 text-red-400 font-semibold text-center max-w-md">{error}</p>
      )}
    </div>
  );
}
