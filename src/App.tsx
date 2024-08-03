import "./App.css";
import { lazy, Suspense, useState } from "react";
import { Stepper } from "./components/stepper/Stepper";
const CustomerInfo = lazy(() =>
  import("./components/custumer-info/CustomeInfo").then(({ CustomerInfo }) => ({
    default: CustomerInfo,
  }))
);
const ShippingInfo = lazy(() =>
  import("./components/shipping-info/ShippingInfo").then(
    ({ ShippingInfo }) => ({ default: ShippingInfo })
  )
);

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Customer Info", "Shipping Info"];
  return (
    <>
      <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
        <Stepper currentHook={[currentStep, setCurrentStep]} steps={steps} />

        <Suspense fallback={"Loading..."}>
          {currentStep === 1 && (
            <div>
              <CustomerInfo />
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <ShippingInfo />
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
}

export default App;
