import Modal from "./components/model";
import Tabs from "./components/tabs";
import Disclosure from "./components/disclosure";
export default function PlaygroundPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Accessibility Playground</h1>

      <p className="mt-4">
        This page will contain the Modal, Tabs, and Disclosure components.
      </p>

      <Modal />
      <Tabs />
      <Disclosure/>
    </main>
  );
}