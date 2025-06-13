import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </header>

      <div className="grid gap-6 max-w-2xl">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md mt-1"
              />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <input type="checkbox" className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Report</p>
                <p className="text-sm text-muted-foreground">Get weekly analytics summary</p>
              </div>
              <input type="checkbox" className="h-6 w-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Data Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Data Sharing</p>
                <p className="text-sm text-muted-foreground">Share anonymous usage data</p>
              </div>
              <input type="checkbox" className="h-6 w-6" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
