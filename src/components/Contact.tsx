import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle, Mail } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4 md:text-5xl">
                Visit Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us for an unforgettable dining experience high above Koh Samui
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Ang Thong, Ko Samui District, Surat Thani 84140<br />
                    Surat Thani, Thailand
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br />
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://wa.me/66806388101" target="_blank" rel="noopener noreferrer">
                      Message Us
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:hello@sorasierra.com">
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-soft animate-in fade-in slide-in-from-right duration-1000">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.378949988183!2d99.9646353!3d9.530517299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f797b3daac61%3A0x8ac743ac8948085f!2sSora%20Sierra%20%E2%80%93%20Sky%20Above%20Samui!5e1!3m2!1sen!2sth!4v1766819332562!5m2!1sen!2sth" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sora Sierra Location" />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;