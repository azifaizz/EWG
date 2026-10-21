import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LeadForm } from "@/components/site/LeadForm";

describe("LeadForm", () => {
  it("renders standard form inputs and submit button", () => {
    render(<LeadForm title="Request Consultation" />);

    expect(screen.getByText("Request Consultation")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Rajesh Kumar/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/98765 43210/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit request/i })).toBeInTheDocument();
  });

  it("shows error messages on empty submission", async () => {
    render(<LeadForm />);

    const submitBtn = screen.getByRole("button", { name: /Submit request/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText("Please enter your name")).toBeInTheDocument();
    expect(screen.getByText("Enter a valid 10-digit mobile number")).toBeInTheDocument();
  });

  it("rejects invalid phone numbers", async () => {
    render(<LeadForm />);

    const nameInput = screen.getByPlaceholderText(/Rajesh Kumar/i);
    const phoneInput = screen.getByPlaceholderText(/98765 43210/i);

    fireEvent.change(nameInput, { target: { value: "Aravind" } });
    fireEvent.change(phoneInput, { target: { value: "invalid-phone" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit request/i }));

    expect(await screen.findByText("Enter a valid 10-digit mobile number")).toBeInTheDocument();
    expect(screen.queryByText("Please enter your name")).not.toBeInTheDocument();
  });

  it("renders skip button and calls onSkip when clicked", () => {
    const handleSkip = vi.fn();
    render(<LeadForm onSkip={handleSkip} />);

    const skipBtn = screen.getByRole("button", { name: /Skip for now/i });
    expect(skipBtn).toBeInTheDocument();

    fireEvent.click(skipBtn);
    expect(handleSkip).toHaveBeenCalledTimes(1);
  });

  it("submits successfully with valid data and renders thank you card", async () => {
    const handleSuccess = vi.fn();
    render(<LeadForm onSuccess={handleSuccess} />);

    const nameInput = screen.getByPlaceholderText(/Rajesh Kumar/i);
    const phoneInput = screen.getByPlaceholderText(/98765 43210/i);

    fireEvent.change(nameInput, { target: { value: "Meera Krishnan" } });
    fireEvent.change(phoneInput, { target: { value: "9876543210" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit request/i }));

    expect(await screen.findByText("Thank you!", {}, { timeout: 3000 })).toBeInTheDocument();
    expect(screen.getByText(/We've received your request/i)).toBeInTheDocument();

    const continueBtn = screen.getByRole("button", { name: /Continue to website/i });
    fireEvent.click(continueBtn);
    expect(handleSuccess).toHaveBeenCalledTimes(1);
  });

  it("triggers silent bot mitigation when honeypot field is filled", async () => {
    render(<LeadForm />);

    const nameInput = screen.getByPlaceholderText(/Rajesh Kumar/i);
    const phoneInput = screen.getByPlaceholderText(/98765 43210/i);
    const honeypotInput = document.querySelector('input[name="hp_website"]') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Spam Bot" } });
    fireEvent.change(phoneInput, { target: { value: "9876543210" } });
    fireEvent.change(honeypotInput, { target: { value: "http://spam.com" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit request/i }));

    expect(await screen.findByText("Thank you!")).toBeInTheDocument();
  });
});
