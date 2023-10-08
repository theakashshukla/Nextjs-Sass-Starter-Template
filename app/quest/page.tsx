import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Quest() {
    
  return (
    <div>
      <Card className="w-[350px] select-none">
        <CardHeader className="flex flex-row space-x-2">
          <CardDescription className="text-xl mt-2">1.</CardDescription>
          <CardDescription className="text-xl font-semibold">
            In which decade was the American Institute of Electrical Engineers
            (AIEE) founded?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <RadioGroup defaultValue="n" className="grid grid-row-3 gap-4">
              <div>
                <RadioGroupItem value="a" id="a" className="peer sr-only" />
                <Label
                  htmlFor="a"
                  className="flex flex-col leading-5 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.card className="mb-3 h-6 w-6" /> */}Hello We Are
                  Human And We Disscuss About The Future Of The World And
                </Label>
              </div>
              <div>
                <RadioGroupItem value="b" id="b" className="peer sr-only" />
                <Label
                  htmlFor="b"
                  className="flex flex-col leading-5 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.paypal className="mb-3 h-6 w-6" /> */}We Are Human
                  And We Disscuss About The Future Of The World
                </Label>
              </div>
              <div>
                <RadioGroupItem value="c" id="c" className="peer sr-only" />
                <Label
                  htmlFor="c"
                  className="flex flex-col leading-5 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.apple className="mb-3 h-6 w-6" /> */}We Are Human
                  And We Disscuss About The Future Of The World
                </Label>
              </div>
              <div>
                <RadioGroupItem value="d" id="d" className="peer sr-only" />
                <Label
                  htmlFor="d"
                  className="flex flex-col leading-5 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {/* <Icons.apple className="mb-3 h-6 w-6" /> */}We Are Human
                  And We Disscuss About The Future Of The World
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
