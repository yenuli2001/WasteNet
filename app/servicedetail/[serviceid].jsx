import { View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'
import { Colors } from '../../constants/Colors'
import Pic from '../../components/ServiceDetail/Pic'


export default function ServiceDetail() {
    const { serviceid } = useLocalSearchParams();
    const [service, setService] = useState(null);  // Set initial state to null
    const [loading, setLoading] = useState(true);  // Set loading state to true initially

    useEffect(() => {
        getServiceDetailById();
    }, []);

    /**
     * Fetch service details by ID from Firebase
     */
    const getServiceDetailById = async () => {
        try {
            const docRef = doc(db, 'List', serviceid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setService(docSnap.data());  // Set the fetched service data
            } else {
                console.log("No such document");
            }
        } catch (error) {
            console.log("Error fetching document:", error);
        } finally {
            setLoading(false);  // Ensure loading stops after fetch
        }
    };

    return (
        <View>
            {loading ? (
                <ActivityIndicator
                    style={{ marginTop: '70%' }}
                    size={'large'}
                    color={Colors.GREEN}
                />
            ) : (
                <View>
                    {/* Only pass the service to Pic if it's defined */}
                    {service ? (
                        <Pic service={service} />
                    ) : (
                        <Text>No service details available</Text>  // Fallback if service is not found
                    )}
                </View>
            )}
        </View>
    );
}
