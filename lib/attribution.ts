interface AttributionData {
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
  timestamp: number;
  userId?: string;
  sessionId: string;
}

interface ConversionData {
  userId?: string;
  sessionId: string;
  conversionType: string;
  value?: number;
  timestamp: number;
  attributionData: AttributionData;
}

class AttributionService {
  private static instance: AttributionService;
  private attributionData: Map<string, AttributionData> = new Map();
  private conversions: ConversionData[] = [];

  private constructor() {}

  static getInstance(): AttributionService {
    if (!AttributionService.instance) {
      AttributionService.instance = new AttributionService();
    }
    return AttributionService.instance;
  }

  // Parse UTM parameters from URL
  parseUTMParams(url: string): AttributionData {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    return {
      source: params.get('utm_source') || 'direct',
      medium: params.get('utm_medium') || 'none',
      campaign: params.get('utm_campaign') || 'none',
      term: params.get('utm_term') || undefined,
      content: params.get('utm_content') || undefined,
      timestamp: Date.now(),
      sessionId: this.generateSessionId()
    };
  }

  // Track attribution data
  trackAttribution(data: AttributionData) {
    this.attributionData.set(data.sessionId, data);
    this.saveToStorage();
  }

  // Track conversion
  trackConversion(conversionData: Omit<ConversionData, 'attributionData'>) {
    const attributionData = this.attributionData.get(conversionData.sessionId);

    if (attributionData) {
      const conversion: ConversionData = {
        ...conversionData,
        attributionData
      };

      this.conversions.push(conversion);
      this.saveToStorage();
    }
  }

  // Get attribution data for a session
  getAttributionData(sessionId: string): AttributionData | undefined {
    return this.attributionData.get(sessionId);
  }

  // Get conversion data
  getConversions(): ConversionData[] {
    return this.conversions;
  }

  // Get conversion data by attribution source
  getConversionsBySource(source: string): ConversionData[] {
    return this.conversions.filter(
      conversion => conversion.attributionData.source === source
    );
  }

  // Get conversion data by campaign
  getConversionsByCampaign(campaign: string): ConversionData[] {
    return this.conversions.filter(
      conversion => conversion.attributionData.campaign === campaign
    );
  }

  // Calculate conversion rate by source
  getConversionRateBySource(source: string): number {
    const sourceConversions = this.getConversionsBySource(source);
    const sourceSessions = Array.from(this.attributionData.values())
      .filter(data => data.source === source).length;

    return sourceSessions > 0 ? sourceConversions.length / sourceSessions : 0;
  }

  // Calculate ROI by campaign
  getROIByCampaign(campaign: string, spend: number): number {
    const campaignConversions = this.getConversionsByCampaign(campaign);
    const totalValue = campaignConversions.reduce(
      (sum, conversion) => sum + (conversion.value || 0),
      0
    );

    return spend > 0 ? (totalValue - spend) / spend : 0;
  }

  // Generate a unique session ID
  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // Save data to localStorage
  private saveToStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('attributionData', JSON.stringify(Array.from(this.attributionData.entries())));
      localStorage.setItem('conversions', JSON.stringify(this.conversions));
    }
  }

  // Load data from localStorage
  loadFromStorage() {
    if (typeof window !== 'undefined') {
      const storedAttributionData = localStorage.getItem('attributionData');
      const storedConversions = localStorage.getItem('conversions');

      if (storedAttributionData) {
        this.attributionData = new Map(JSON.parse(storedAttributionData));
      }

      if (storedConversions) {
        this.conversions = JSON.parse(storedConversions);
      }
    }
  }
}

export const attributionService = AttributionService.getInstance();
