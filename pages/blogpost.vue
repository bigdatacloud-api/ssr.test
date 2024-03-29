<template>
    <div data-v-44ddac85="" class="container"><img data-v-44ddac85=""
            src="https://res.cloudinary.com/bigdatacloud/image/upload/v1651457788/blog-header/ip-geolocation-accuracy.png"
            width="1168" height="487" alt="How accurate can IP Geolocation get?">
        <div data-v-44ddac85="" class="my-4"><a data-v-44ddac85="" href="/blog/ip-geolocation" class="pill pill-xs">IP
                Geolocation</a></div>
        <h1 data-v-44ddac85="" class="text-dark">How accurate can IP Geolocation get?</h1>
        <div data-v-44ddac85="" class="flex justify-between md:items-center flex-column md:flex-row">
            <p data-v-44ddac85="" class="text-dark my-0">BigDataCloud <span data-v-44ddac85="" class="text-dark mx-2">27
                    April 2021</span></p>
        </div>
        <div data-v-44ddac85="" class="border-b mb-4"></div>
        <div data-v-44ddac85="" class="text-dark singlePost" data-clarity-region="article">
            <p><a title="IP Geolocation API Package" href="/ip-geolocation">IP geolocation</a> technology has been around
                for a long while. It is the only non-intrusive tool a service provider can use to estimate the geographical
                location of online visitors.</p>
            <p>IP geolocation has proved itself as the main driving engine for delivering location-based services such as
                content localisation, digital rights management, customer targeting and fraud detection.</p>
            <p>But how accurate is an IP Geolocation lookup? Can we trust it to make critical business decisions?</p>
            <p>IP Geolocation accuracy has been one of the heavily debated topics for many years across many platforms. We
                can find many complaints on forums such as IP addresses not showing the correct location or only
                country-level data being reliable.</p>
            <p>One of the most popular myths is that the IP Geolocation is inaccurate because it is based on public data and
                that it usually points to the organisation’s headquarters location rather than the real user’s location.</p>
            <p>The reality varies widely because not all IP Geolocation services are made the same, and they often utilise
                different technologies to source their data. Please see our <a href="/blog/ip-geolocation-demystified">blog
                    post here for more details on how conventional IP Geolocation services operate</a>.</p>
            <p>The goal of this article is not to compare different IP Geolocation providers.&nbsp;</p>
            <p><a title="/insights/ip-geolocation-accuracy-report" href="/insights/ip-geolocation-accuracy-report">Check out
                    the Daily IP Geolocation Accuracy Report for various service providers.</a></p>
            <p>This article addresses the fundamentals of IP Geolocation and then explains the best accuracy and outcomes we
                can theoretically expect out of ‘perfect’ IP Geolocation. It then outlines conceptual limitations we should
                be aware of, and to what extent we can trust the data we receive.</p>
            <h2><strong>IPv4 is here to stay</strong></h2>
            <p>When we refer to an IP Geolocation, we are considering the IPv4 address space first because most of our web
                traffic is still coming from IPv4 addresses.</p>
            <p>IPv6 was created to solve the global shortage of IPv4 address space by providing a whopping 2<sup>128</sup>
                extension. However, it has not happened even though two decades have passed since it was introduced.</p>
            <p>There are many reasons why IPv6 is not taking flight. The main reason is probably the most surprising one –
            </p>
            <blockquote>
                <p><span style="font-size: 24pt">there isn’t a real shortage of IPv4 addresses, after all.</span></p>
            </blockquote>
            <p>Well, to some extent there is, as it is almost impossible to get some for free anymore even if it is vital
                for your business. It has just become a cherished commodity, and it is here to stay.</p>
            <p>How is it possible, you may wonder? There are only a limitedd number of 2<sup>32</sup> or roughly 4.3 billion
                addresses available on IPv4, so how can they accommodate over 7 billion internet-hungry people on our planet
                and allow for enormous expansion into the IoT space?</p>
            <p>Surprisingly - yes, it can, and it currently does it for even substantially less than that!</p>
            <p>First, despite the theoretical maximum of 4,294,967,296 IPv4 addresses, not all are allocated for public
                internet use.</p>
            <p><img class="img-fluid" style="display: block; margin: 0 auto"
                    src="https://res.cloudinary.com/bigdatacloud/image/upload/v1628649047/IP-Address-space-distribution.png"
                    alt="Pie chart of distribution of IPv4 addresses based on their allocations." width="430" height="240"
                    loading="lazy"></p>
            <p>And then, out of those allocated, how many do you think are being actively used?</p>
            <p><img class="img-fluid" style="display: block; margin: 0 auto"
                    src="https://res.cloudinary.com/bigdatacloud/image/upload/v1628649062/allocated-space-utilisation-BGP.png"
                    alt="Pie chart of distribution of IPv4 addresses based on their utilisation." width="359" height="244"
                    loading="lazy"></p>
            <p>Remarkably, there are currently merely 2.9 billion publicly routable IPv4 addresses servicing our entire
                internet! Visit our online <a href="/insights/ipv4-monitoring">IpV4 address space monitoring</a> for
                up-to-date figures.</p>
            <p>And this is whilst there are:</p>
            <ul>
                <li>more than 4.5 billion home internet users in the world</li>
                <li>over 300 million active websites</li>
                <li>over 3.5 billion smartphone users in the world</li>
                <li>over 7 billion IoT devices and it is growing</li>
                <li>millions of public IP addresses utilised by the global network infrastructures</li>
            </ul>
            <h2><strong>So how is that even possible?</strong></h2>
            <p>It is because we only need a dedicated, publicly routable IP address when we require two-way communication
                such as when we need to be able to reach out at will and also to receive incoming connection requests from
                the outside world.</p>
            <p>However, most of our internet activities are perfectly suitable for one-way communication only. For instance,
                when we browse the internet, we initiate the connection ourselves, and we don’t expect websites or other web
                service providers to stay actively connected to our devices. We even hope they don’t, otherwise, it would
                give rise to significant security challenges.</p>
            <p>Websites, on the other hand, are not expected to reach out or initiate a connection. And since websites work
                with hostnames, it is perfectly suitable to hook them up behind a shared IP address.</p>
            <p>Theoretically, it is possible to put all of our over 300 million worldwide active websites behind a single
                anycast IP address, or just a few of them for redundancy. It will be even much more effective to protect
                them from cyber attacks that way. Cloudflare is an excellent example of how this can work.</p>
            <p>Technically, there are plenty of technologies already available to share an IP address when providing one-way
                communication. We use Network Address Translation (NAT) at home or in small offices, proxies at larger
                organisations, and name-based virtual hosting for websites, to name a few.</p>
            <p>We tend to classify IP addresses as static (yours forever) or dynamically allocated (yours for a limited
                time). However, we often don’t get an IP address assigned to us exclusively. We only temporarily make use of
                it, and possibly even share it with other remote peers simultaneously.</p>
            <p>Cellular operators, for example, often implement Carrier-grade NAT (CGNAT) and make use of small IP address
                blocks to cater for a large active customer base.</p>
            <p>Technically, they assign a pool of IP addresses available to them to a section of their network, and mobile
                users are only making use of an IP address to get access to the internet, the same as it was with a proxy,
                for example. The connection is strictly one-directional, there is no way an outside world IP address can
                initiate a link back to the mobile device using that address. This maintains robust security and reduces the
                number of public IP addresses required.</p>
            <blockquote>
                <p><span style="font-size: 18pt">The downside, however, is that the old and widespread assumption that every
                        single IP address has a single device behind it and therefore can be tracked down to an exact
                        geographical location is not valid anymore!</span></p>
            </blockquote>
            <p>Therefore, when we consider IP Geolocation, we must first consider how an IP address is being used.</p>
            <h2><strong>Static IP addresses</strong></h2>
            <p>A static IP address’s geolocation is the easiest to get right.</p>
            <p>Regardless of the exact method that helps IP Geolocation providers to source their data, there is one common
                overarching principle. IP Geolocation is always evidence-based. It could be public RIR data, self-published
                geofeeds, actively sourced measurements or otherwise processed information or an end-user reported or
                otherwise obtained IP-location pairs.</p>
            <p>Any way you put it, it is always about a piece of field evidence or at least a clue from data received. Not
                all evidence data is correct, it could be a way off, just like a faulty report of a GPS device’s location,
                for example. The quality of an IP geolocation service always relies on what data they have access to and how
                they handle it.</p>
            <p>Therefore, when we’ve got a fresh, valid, and highly precise geographic location as a piece of evidence for a
                static IP address used by a stationary device – the resulting IP Geolocation accuracy can be scarily
                accurate – often up to a few meters away.</p>
            <p>This is why BigDataCloud deliberately obscures the provided location coordinates slightly by rounding it up
                to the nearest kilometre — essentially capping the maximum accuracy down to within one square kilometre.</p>
            <blockquote>
                <p><span style="font-size: 24pt">Hence, IP Geolocation is not suitable for identifying the exact location of
                        a user.</span></p>
            </blockquote>
            <p>Furthermore, it should not be as accurate as it can be because we must also respect the privacy of the IP
                address end-users.</p>
            <h2><strong>Dynamically allocated IP addresses.</strong></h2>
            <p>A dynamic IP address is an IP address that our Internet Service Provider (ISP) assigns to us temporarily.</p>
            <p>The only noticeable difference between a static allocation and a dynamic one is that with the static one, we
                are promised that the address would not change as long as we maintain the contract. In the case of a dynamic
                assignment, it may vary, as often as we reboot our router or even more, depending on the ISP’s policies.</p>
            <p>Some ISPs could enforce address changes as often as every few hours and others let us have the same address
                for months even if we reboot our router occasionally.</p>
            <p>The longer the same IP address remains at the same physical location, the better chance that an IP
                Geolocation service provider can pick it up and locate it as accurately as a static IP address.</p>
            <p>But what happens if the IP address we’ve just got was spotted previously at another location? Yes, the IP
                geolocation results will be off. But, by how much? Let’s now turn to how this will affect the accuracy of
                the IP Geolocation.</p>
            <p>A dynamic IP address usually comes from a Dynamic Host Configuration Protocol (DHCP) allocation. Just like
                we’ve got our home computer receiving a local private IP address from our home router using DHCP. There is
                also a router on our ISP’s network, which is responsible for our section of the system.</p>
            <p>This router, in turn, has a pool of IP addresses it can allocate to customers. These IP addresses could be
                sequential, resembling a single network block, or even a list of several blocks. Sometimes these blocks can
                be as small as a single IP address. This is precisely why the IP geolocation data granularity is so
                important. The ‘perfect’ IP Geolocation service must support up to a single IP address granulation - just a
                side note.</p>
            <p>Noticeably, the network router which is servicing us directly is essentially responsible for our section of
                the network, and most often this section resembles a very distinct geographical boundary - a service area.
            </p>
            <blockquote>
                <p><span style="font-size: 18pt">Therefore, the maximum IP Geolocation error we should expect when using an
                        IP address which was witnessed and noted somewhere else is the maximum distance from our physical
                        location to the outermost end of the boundary of that area.</span></p>
            </blockquote>
            <p>The service area or confidence area as we call it at BigDataCloud is a critically important piece of
                information that can tell us where else the IP address of interest can potentially be allocated if it was
                assigned dynamically. We must consider if the resulting decision we make upon IP geolocation data is
                substantial.</p>
            <p><img class="img-fluid" style="display: block; margin: 0 auto"
                    src="https://res.cloudinary.com/bigdatacloud/image/upload/v1628649076/ip-geolocation-confidence-area.png"
                    alt="Map showing Ip geolocation pin point location marker and confidence area overlay" width="899"
                    height="453" loading="lazy"></p>
            <p style="text-align: center"><em>Screenshot of maps showing the estimated point location and confidence area
                    (service area) of the respective IP addresses generated using <a href="/ip-geolocation">BigDataCloud’s
                        IP Geolocation API</a>. You can <a href="/what-is-my-ip">check your IP address here</a>.</em></p>
            <p>For instance, if we grant or ban access to services or decide on the likelihood of e-commerce fraud, we
                should definitely include the service area in our considerations too. A location point estimation might not
                be enough as it is only an estimate which is usually based on the latest or the most likely (frequent)
                location for it.</p>
            <h2><strong>Cellular networks</strong></h2>
            <p>The IP address allocation by a cellular network operator can loosely resemble a fixed network, ISP dynamic
                allocation. However, there are at least three noticeable differences which can make IP Geolocation much more
                challenging for mobile networks.</p>
            <ol>
                <li>The device behind an IP address is not necessarily a stationary one. We can sometimes drive several
                    hundred kilometres and still be using the same cellular network assigned public IP address.</li>
                <li>We often do not have access to a full IP address, as we are only ‘riding on it’, sharing it with other,
                    often very remote customers elsewhere.</li>
                <li>Cellular network operators can often consolidate several internal network sections giving them a shared
                    internet access point with the same shared pool of IP addresses available. This can make the service
                    areas for the cellular address blocks significantly bigger.</li>
            </ol>
            <p>Therefore, what is the outcome we should expect from a ‘perfect’ IP Geolocation service for
                cellular-originated IP addresses?</p>
            <blockquote>
                <p><span style="font-size: 18pt">Unfortunately, even a theoretically ‘perfect’ IP Geolocation service can’t
                        always estimate the correct, up to the moment location for every IP address on a cellular
                        network.</span></p>
            </blockquote>
            <p>Even the cellular network operators themselves often don’t have this data in real-time. They may be able to
                tell better which customers are using which IP address, but not exactly where they are. Most likely, they
                cannot without digging deep into their internal logs.</p>
            <p>Hence, as a first step, it would be beneficial for businesses if the IP geolocation providers could just
                indicate whether an IP address of interest belongs to a cellular block or not. A straightforward way of
                doing this is checking if the enterprise that services this IP address also operates a cellular network like
                Vodafone, AT&amp;T etc. But this would not always be helpful because some of these companies run mixed
                services. Hence, we should be able to detect cellular networks regardless of the ASN announcing them.</p>
            <p>The next critical point for IP geolocation services is the service area of a cellular network even though it
                can be a substantially large one. Some cellular operators can extend their allocation for the same pool of
                IP addresses to areas often as big as the whole country. <strong>This means that an IP address within the
                    cellular network can be used by a mobile customer practically anywhere within the servicing
                    country.</strong> Hence, it is critical to know this if we need to make an important business decision
                based on IP Geolocation.</p>
            <h2><strong>Hosting</strong></h2>
            <p>Another essential categorisation applicable to an IP address is to distinguish between those that are
                servicing a human-operated device directly, or just a middlebox server or a bot. At BigDataCloud, we tend to
                categorise these as <em>Consumers </em>and <em>Hosting </em>networks.</p>
            <p><strong>Hosting is the overarching term we use to describe all sorts of unattended computers such as those
                    that usually run from datacenters and also offices or private properties.</strong></p>
            <p>Hosting network IP addresses are essentially those which power public websites, mail servers, VPN services,
                TOR, proxy and many lawful and also malicious applications.</p>
            <p>Residential proxy or VPN networks, for example, often reside on benevolent IP address blocks announced by
                ASNs which belong to legitime ISPs or even cellular network operators. BigDataCloud also detects these and
                marks them as Hosting too.</p>
            <p>Most of the Hosting IP addresses are static allocations.</p>
            <h2><strong>Edge cases</strong></h2>
            <p>There are some outliers with all the above cases, and the next sections define how IP Geolocation would be
                expected to handle these.</p>
            <p><strong>Roaming cellular</strong></p>
            <p>When we arrive in a foreign country and turn our roaming data on, we can find that, surprisingly, the
                websites we visit still recognise us as never leaving our home country. We can often continue using the same
                IP address even though we are thousands of miles away!</p>
            <p>How is that possible? Most if not all mobile network operators worldwide tend to 'tunnel' their remote
                customers' traffic back to their home networks. This way, they can better control the billing of their super
                costly data services.</p>
            <p><strong>Technically, this is very similar to a VPN that tunnels our traffic back to our home
                    networks.</strong></p>
            <p>It makes IP Geolocation extremely challenging for roaming customers. On top of a regular CGNAT where several
                scattered mobile customers can share the same IP address for their internet use, roaming will add a chance
                that some of these could be shared anywhere in the world.</p>
            <p>What can we expect from a perfect IP Geolocation service in this case?</p>
            <p><strong>BigDataCloud is often able to recognise IP addresses used overseas.</strong> However, keeping in mind
                that there is a strong possibility that the same IP address is simultaneously allocated at the home country
                as well, we decide to ignore that data and report on the home country user's location instead.</p>
            <h2><strong>VPN, TOR, PROXY and other anonymisers</strong></h2>
            <p>We often see internet users taking extreme measures to mask their real IP addresses. There are zillions of
                services available out there to help them hide. Usually, these services are offered as a safer option to
                surf the internet, a very questionable claim, to say the least.</p>
            <p>We can only wonder why people tend to trust a ‘no street address’ and ‘no phone number’ company listed on
                some remote island more than their home ISP for handling their private communication and data. These
                services are vastly overused in the free parts of the world.</p>
            <p>Anyway, regardless of their motives, we must respect their choices. Even if it was possible to recover the
                real IP address and the current location of the user, we see IP Geolocation services often reporting on the
                estimated position of the middlebox IP address instead of the real end-user one.</p>
            <h2><strong>Conclusion</strong></h2>
            <blockquote>
                <p><span style="font-size: 24pt">IP Geolocation is categorically not suitable for tracking the exact
                        geographical location of a person or device.</span></p>
            </blockquote>
            <p>However, in the majority of cases, it can assuredly give crucial insights into the geographical area the IP
                address is being used.</p>
            <p>The various supporting information such as the confidence area, network type and risk factors can make the IP
                Geolocation based upon business decisions very robust and trustworthy.</p>
        </div>
    </div>
</template>
