import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border-none">
        <CardContent className="pt-6 text-center space-y-6">
          <div className="flex justify-center">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900">Page Not Found</h1>
          <p className="text-gray-500 text-sm md:text-base">
            We couldn't find the page you were looking for. It might have been removed or doesn't exist.
          </p>

          <Link href="/">
             <Button className="w-full bg-primary hover:bg-primary/90">Return Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
