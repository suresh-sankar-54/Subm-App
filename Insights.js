import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Insights = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insights}>
      <View style={styles.body}>
        <View style={styles.body1}>
          <View style={styles.insightsNotificationGrp}>
            <Pressable
              style={styles.vuesaxlineararrowLeft}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={[styles.insights1, styles.insights1SpaceBlock]}>
              Insights
            </Text>
            <Pressable
              style={[
                styles.vuesaxlinearnotification,
                styles.insights1SpaceBlock,
              ]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearnotification1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.graphWeeklyGrpBx}>
            <View style={styles.graphWeeklyGrp}>
              <View style={styles.weeklyMonthlyYearlyGrp}>
                <View style={styles.weeklyWrapper}>
                  <Text style={[styles.weekly, styles.weeklyTypo]}>Weekly</Text>
                </View>
                <View style={[styles.monthlyWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.monthly, styles.weeklyTypo]}>
                    Monthly
                  </Text>
                </View>
                <View style={[styles.yearlyWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.weekly, styles.weeklyTypo]}>Yearly</Text>
                </View>
              </View>
              <View style={styles.graphMonthNumGrp}>
                <View style={styles.graphPriceGrp}>
                  <View style={styles.priceGrp}>
                    <Text style={[styles.text, styles.textTypo]}>₹ 3999</Text>
                    <Text style={[styles.text1, styles.textTypo]}>₹ 2999</Text>
                    <Text style={[styles.text1, styles.textTypo]}>₹ 1999</Text>
                    <Text style={[styles.text1, styles.textTypo]}>₹ 999</Text>
                    <Text style={[styles.text1, styles.textTypo]}>₹ 0</Text>
                  </View>
                  <View style={styles.graph}>
                    <Image
                      style={styles.graphChild}
                      contentFit="cover"
                      source={require("../assets/vector-3.png")}
                    />
                    <Image
                      style={styles.graphItem}
                      contentFit="cover"
                      source={require("../assets/vector-1.png")}
                    />
                    <Image
                      style={[styles.graphInner, styles.addMenuPosition]}
                      contentFit="cover"
                      source={require("../assets/vector-5.png")}
                    />
                    <Image
                      style={[styles.vectorIcon, styles.graphChildLayout]}
                      contentFit="cover"
                      source={require("../assets/vector-6.png")}
                    />
                    <Image
                      style={[styles.graphChild1, styles.graphChildLayout]}
                      contentFit="cover"
                      source={require("../assets/vector-2.png")}
                    />
                    <Image
                      style={[styles.graphChild2, styles.graphChild2Layout]}
                      contentFit="cover"
                      source={require("../assets/vector-4.png")}
                    />
                  </View>
                </View>
                <View style={styles.monthGrp}>
                  <Text style={[styles.jan, styles.textTypo]}>Jan</Text>
                  <Text style={[styles.feb, styles.febTypo]}>Feb</Text>
                  <Text style={[styles.feb, styles.febTypo]}>Mar</Text>
                  <Text style={[styles.apr, styles.febTypo]}>Apr</Text>
                  <Text style={[styles.may, styles.febTypo]}>May</Text>
                  <Text style={[styles.apr, styles.febTypo]}>Jun</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body2}>
          <View style={styles.filterGrp}>
            <Image
              style={styles.vuesaxlineararrowLeft}
              contentFit="cover"
              source={require("../assets/filtericon.png")}
            />
            <View style={[styles.allCtaFill, styles.ctaSpaceBlock]}>
              <Text style={[styles.monthly, styles.weeklyTypo]}>All</Text>
            </View>
            <View style={[styles.entertainmentCtaStroke, styles.ctaSpaceBlock]}>
              <Text style={[styles.weekly, styles.weeklyTypo]}>
                Entertainment
              </Text>
            </View>
            <View style={[styles.entertainmentCtaStroke, styles.ctaSpaceBlock]}>
              <Text style={[styles.weekly, styles.weeklyTypo]}>Music</Text>
            </View>
            <View style={[styles.entertainmentCtaStroke, styles.ctaSpaceBlock]}>
              <Text style={[styles.weekly, styles.weeklyTypo]}>
                Productivity
              </Text>
            </View>
          </View>
          <View style={styles.appsGrp}>
            <View style={styles.tnebBxLayout}>
              <View style={styles.primeIconGrp}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameChild, styles.frameChildLayout]} />
                  <Image
                    style={[styles.unnamed1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/unnamed-1.png")}
                  />
                </View>
                <View style={styles.amazonPrimeParent}>
                  <Text style={[styles.amazonPrime, styles.textTypo]}>
                    Amazon Prime
                  </Text>
                  <Text style={[styles.entertainment1, styles.dueFlexBox]}>
                    Entertainment
                  </Text>
                </View>
              </View>
              <View style={styles.priceDueGrp}>
                <View style={styles.parent}>
                  <Text style={[styles.text5, styles.addLayout]}>₹ 599</Text>
                  <Text style={[styles.due01122023, styles.dueFlexBox]}>
                    Due: 01/12/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.tnebBxLayout]}>
              <View style={styles.primeIconGrp}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameItem, styles.frameChildLayout]} />
                  <Image
                    style={[styles.unnamed1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/tneb-1.png")}
                  />
                </View>
                <View style={styles.amazonPrimeParent}>
                  <Text style={[styles.amazonPrime, styles.textTypo]}>
                    TNEB
                  </Text>
                  <Text style={[styles.entertainment1, styles.dueFlexBox]}>
                    Utility
                  </Text>
                </View>
              </View>
              <View style={styles.priceDueGrp}>
                <View style={styles.parent}>
                  <Text style={[styles.text5, styles.addLayout]}>₹ 499</Text>
                  <Text style={[styles.due01092023, styles.dueFlexBox]}>
                    Due: 01/09/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.tnebBxLayout]}>
              <View style={styles.primeIconGrp}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameInner, styles.frameChildLayout]} />
                  <Image
                    style={styles.iconPosition}
                    contentFit="cover"
                    source={require("../assets/jio-2.png")}
                  />
                </View>
                <View style={styles.amazonPrimeParent}>
                  <Text style={[styles.amazonPrime, styles.textTypo]}>Jio</Text>
                  <Text style={[styles.entertainment1, styles.dueFlexBox]}>
                    Utility
                  </Text>
                </View>
              </View>
              <View style={styles.priceDueGrp}>
                <View style={styles.parent}>
                  <Text style={[styles.text5, styles.addLayout]}>₹ 666</Text>
                  <Text style={[styles.due01092023, styles.dueFlexBox]}>
                    Due: 08/12/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.tnebBxLayout]}>
              <View style={styles.primeIconGrp}>
                <View style={styles.rectangleParent}>
                  <View
                    style={[styles.rectangleView, styles.frameChildLayout]}
                  />
                  <Image
                    style={[styles.unnamed1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/airtel-2.png")}
                  />
                </View>
                <View style={styles.amazonPrimeParent}>
                  <Text style={[styles.amazonPrime, styles.textTypo]}>
                    Airtel Xstream
                  </Text>
                  <Text style={[styles.entertainment1, styles.dueFlexBox]}>
                    Utility
                  </Text>
                </View>
              </View>
              <View style={styles.priceDueGrp}>
                <View style={styles.parent}>
                  <Text style={[styles.text5, styles.addLayout]}>₹ 499</Text>
                  <Text style={[styles.due01092023, styles.dueFlexBox]}>
                    Due: 23/02/2024
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.tnebBxLayout]}>
              <View style={styles.primeIconGrp}>
                <View style={styles.rectangleParent}>
                  <View style={[styles.frameChild1, styles.frameChildLayout]} />
                  <Image
                    style={[styles.netflixSymbolRgbIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/netflix-symbol-rgb.png")}
                  />
                </View>
                <View style={styles.amazonPrimeParent}>
                  <Text style={[styles.netflix, styles.textTypo]}>Netflix</Text>
                  <Text
                    style={[styles.entertainment2, styles.due23082023FlexBox]}
                  >
                    Entertainment
                  </Text>
                </View>
              </View>
              <View style={styles.priceDueGrp}>
                <View style={styles.parent}>
                  <Text style={[styles.text5, styles.addLayout]}>₹ 499</Text>
                  <Text style={[styles.due23082023, styles.due23082023FlexBox]}>
                    Due: 23/08/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.insightsInner}>
        <View style={[styles.homeMenuParent, styles.graphChild2Layout]}>
          <View style={[styles.homeMenu, styles.menuPosition]}>
            <Image
              style={styles.vuesaxlineararrowLeft}
              contentFit="cover"
              source={require("../assets/homeicon.png")}
            />
            <Text style={[styles.home, styles.addTypo]}>Home</Text>
          </View>
          <Pressable
            style={[styles.addMenu, styles.addMenuPosition]}
            onPress={() => {}}
          >
            <View style={styles.rectangleParent}>
              <Image
                style={styles.addIconChild}
                contentFit="cover"
                source={require("../assets/ellipse-19.png")}
              />
              <Image
                style={[styles.vuesaxlinearaddIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlinearadd.png")}
              />
            </View>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Pressable
            style={[styles.profileMenu, styles.menuPosition]}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              style={styles.vuesaxlineararrowLeft}
              contentFit="cover"
              source={require("../assets/profileicon.png")}
            />
            <Text style={[styles.profile, styles.addTypo]}>Profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  insights1SpaceBlock: {
    marginLeft: 107,
    height: 24,
  },
  weeklyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular10,
  },
  wrapperSpaceBlock: {
    marginLeft: 4,
    paddingHorizontal: Padding.p_5xs,
    width: 98,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    height: 14,
    color: Color.fFFFFF,
    fontWeight: "500",
    fontFamily: FontFamily.regular10,
  },
  addMenuPosition: {
    top: 0,
    position: "absolute",
  },
  graphChildLayout: {
    width: 245,
    left: 1,
  },
  graphChild2Layout: {
    height: 70,
    position: "absolute",
  },
  febTypo: {
    marginLeft: 24,
    height: 14,
    textAlign: "right",
    color: Color.fFFFFF,
    fontWeight: "500",
    fontSize: FontSize.medium11_size,
    display: "flex",
    fontFamily: FontFamily.regular10,
    alignItems: "center",
  },
  ctaSpaceBlock: {
    marginLeft: 16,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 32,
    width: 32,
    zIndex: 0,
    borderRadius: Border.br_5xs,
  },
  iconPosition: {
    height: 26,
    width: 26,
    left: 3,
    top: 3,
    zIndex: 1,
    position: "absolute",
  },
  dueFlexBox: {
    marginTop: 6,
    height: 12,
    color: Color.style,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular10,
    alignItems: "center",
  },
  addLayout: {
    width: 30,
    display: "flex",
    alignItems: "center",
  },
  tnebBxLayout: {
    height: 56,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    width: 336,
    alignItems: "center",
  },
  iconLayout: {
    height: 28,
    width: 28,
    zIndex: 1,
    position: "absolute",
  },
  due23082023FlexBox: {
    color: Color.e8F99,
    marginTop: 6,
    height: 12,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.regular10,
    alignItems: "center",
  },
  menuPosition: {
    top: 28,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addTypo: {
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.regular10,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vuesaxlineararrowLeft: {
    height: 24,
    width: 24,
  },
  insights1: {
    fontSize: FontSize.bold16_size,
    width: 66,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.regular10,
    color: Color.colorYellowgreen,
    fontWeight: "700",
  },
  vuesaxlinearnotification: {
    width: 24,
  },
  insightsNotificationGrp: {
    flexDirection: "row",
    justifyContent: "center",
  },
  weekly: {
    color: Color.style,
    fontWeight: "500",
    fontSize: FontSize.medium11_size,
  },
  weeklyWrapper: {
    paddingHorizontal: Padding.p_5xs,
    width: 98,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color,
    borderRadius: Border.br_9xs,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  monthly: {
    color: Color.color1,
    fontWeight: "500",
    fontSize: FontSize.medium11_size,
  },
  monthlyWrapper: {
    backgroundColor: Color.colorYellowgreen,
  },
  yearlyWrapper: {
    backgroundColor: Color.color,
  },
  weeklyMonthlyYearlyGrp: {
    paddingHorizontal: 5,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.color,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    width: 40,
    height: 14,
    textAlign: "right",
    color: Color.fFFFFF,
    fontSize: FontSize.medium11_size,
    display: "flex",
    alignItems: "center",
  },
  text1: {
    width: 40,
    height: 14,
    textAlign: "right",
    color: Color.fFFFFF,
    fontSize: FontSize.medium11_size,
    display: "flex",
    alignItems: "center",
    marginTop: 12,
  },
  priceGrp: {
    justifyContent: "center",
  },
  graphChild: {
    top: 23,
    height: 46,
    zIndex: 0,
    borderRadius: Border.br_11xs,
    left: 2,
    position: "absolute",
    width: 243,
  },
  graphItem: {
    height: 58,
    zIndex: 1,
    top: 10,
    borderRadius: Border.br_11xs,
    left: 2,
    position: "absolute",
    width: 243,
  },
  graphInner: {
    zIndex: 2,
    borderRadius: Border.br_11xs,
    left: 2,
    width: 243,
    height: 24,
  },
  vectorIcon: {
    zIndex: 3,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_11xs,
    height: 94,
  },
  graphChild1: {
    height: 84,
    zIndex: 4,
    top: 10,
    position: "absolute",
  },
  graphChild2: {
    top: 24,
    zIndex: 5,
    width: 245,
    left: 1,
  },
  graph: {
    marginLeft: 15,
    height: 94,
    width: 243,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  graphPriceGrp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jan: {
    width: 20,
    textAlign: "right",
    height: 14,
    color: Color.fFFFFF,
    fontSize: FontSize.medium11_size,
    display: "flex",
    alignItems: "center",
  },
  feb: {
    width: 22,
  },
  apr: {
    width: 20,
  },
  may: {
    width: 24,
  },
  monthGrp: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  graphMonthNumGrp: {
    marginTop: 12,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  graphWeeklyGrp: {
    justifyContent: "center",
    alignItems: "center",
  },
  graphWeeklyGrpBx: {
    padding: Padding.p_xs,
    marginTop: 24,
    justifyContent: "flex-end",
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    overflow: "hidden",
  },
  body1: {
    alignItems: "center",
  },
  allCtaFill: {
    backgroundColor: Color.colorYellowgreen,
  },
  entertainmentCtaStroke: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen,
    borderWidth: 1,
  },
  filterGrp: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameChild: {
    backgroundColor: Color.colorLightblue,
  },
  unnamed1Icon: {
    borderRadius: Border.br_5xs,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  amazonPrime: {
    width: 88,
    fontSize: FontSize.regular12_size,
    color: Color.fFFFFF,
    height: 14,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  entertainment1: {
    fontSize: FontSize.regular12_size,
    width: 86,
  },
  amazonPrimeParent: {
    marginLeft: 12,
    width: 86,
    justifyContent: "center",
  },
  primeIconGrp: {
    flexDirection: "row",
    alignItems: "center",
  },
  text5: {
    height: 14,
    color: Color.fFFFFF,
    fontWeight: "500",
    fontFamily: FontFamily.regular10,
    textAlign: "left",
    fontSize: FontSize.medium11_size,
  },
  due01122023: {
    width: 96,
    fontSize: FontSize.regular10_size,
  },
  parent: {
    width: 80,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  vuesaxlineararrowRightIcon: {
    width: 12,
    marginLeft: 8,
    height: 12,
  },
  priceDueGrp: {
    marginLeft: 82,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    backgroundColor: Color.colorCornflowerblue,
  },
  due01092023: {
    fontSize: FontSize.regular10_size,
    width: 96,
  },
  tnebBx: {
    marginTop: 16,
  },
  frameInner: {
    backgroundColor: Color.colorLightpink_200,
  },
  rectangleView: {
    backgroundColor: Color.colorSilver_100,
  },
  frameChild1: {
    backgroundColor: Color.colorLightpink_100,
  },
  netflixSymbolRgbIcon: {
    top: 2,
    left: 2,
    borderRadius: Border.br_5xs,
  },
  netflix: {
    width: 180,
    fontSize: FontSize.regular12_size,
    color: Color.fFFFFF,
    height: 14,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  entertainment2: {
    fontSize: FontSize.regular12_size,
    width: 86,
  },
  due23082023: {
    fontSize: FontSize.regular10_size,
    width: 96,
  },
  appsGrp: {
    marginTop: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  body2: {
    marginTop: 32,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  body: {
    width: 336,
    justifyContent: "center",
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
    color: Color.colorYellowgreen,
  },
  homeMenu: {
    left: 0,
  },
  addIconChild: {
    width: 48,
    height: 48,
    zIndex: 0,
  },
  vuesaxlinearaddIcon: {
    left: 10,
    top: 10,
  },
  add: {
    fontSize: FontSize.size_sm,
    height: 18,
    width: 30,
    display: "flex",
    alignItems: "center",
    color: Color.style,
    fontWeight: "700",
    justifyContent: "center",
  },
  addMenu: {
    left: 106,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    fontSize: FontSize.regular12_size,
    color: Color.style,
    fontWeight: "500",
  },
  profileMenu: {
    left: 223,
  },
  homeMenuParent: {
    top: -14,
    left: 57,
    width: 261,
  },
  insightsInner: {
    width: 375,
    height: 80,
    marginTop: 23,
    backgroundColor: Color.color,
  },
  insights: {
    backgroundColor: Color.a1A1A,
    flex: 1,
    paddingTop: Padding.p_21xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Insights;
